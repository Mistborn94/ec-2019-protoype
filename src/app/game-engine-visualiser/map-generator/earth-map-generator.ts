import { intRange} from '../static-functions';
import { SurfaceTypeEnum } from '../game-engine-visualiser.interface';

export function makeEarthMap(flatTemplate) {
  // Light the pixels that border 2 regions, leaving clear regions on screen
  flatTemplate.forEach(gc => gc.ipInfo.cookedValue = (gc.ipInfo.srcValue > 0.33 && gc.ipInfo.srcValue < 0.66) ? 1 : 0);

  // "MS Paint" fill these regions, by only clicking below "mapConfig.getAltitude()"
  flatTemplate.forEach((gc, i) => {
    if (gc.y > this.mapConfig.getAltitude()
      && gc.ipInfo.flag === undefined
      && gc.ipInfo.cookedValue === 0) {

      gc.ipInfo.flag = i;
      intRange(flatTemplate.length).forEach(() => { // Loop once for every pixel in map - TODO: Optimize
        // Constrain dilation against those pixel borders on screen
        flatTemplate.filter(needFlagCell =>
          needFlagCell.ipInfo.cookedValue === 0
          && needFlagCell.ipInfo.flag === undefined
          && needFlagCell.nearCells
            .cardinalList()
            .some(preFlagged => preFlagged.ipInfo.flag > 0))
          .forEach(needFlagCell => needFlagCell.ipInfo.flag = i);
      });
    }
  });
  // Consolidate all flags into single value types
  flatTemplate.forEach(gc => gc.ipInfo.cookedValue = (gc.ipInfo.flag > 0) ? 1 : 0);

  // Morphological Dilation
  flatTemplate.filter(gc => gc.ipInfo.cookedValue === 0 && gc.nearCells.cardinalList().some(nc => nc.ipInfo.cookedValue === 1))
    .forEach(gc => gc.ipInfo.cookedValue = 1);

  // Morphological Erosion
  flatTemplate.filter(gc => gc.ipInfo.cookedValue === 1 && gc.nearCells.cardinalList().some(nc => nc.ipInfo.cookedValue === 0))
    .forEach(gc => gc.ipInfo.cookedValue = 0);

  // Paint cells with SurfaceTypes
  flatTemplate.forEach(gc => {
    if (gc.ipInfo.cookedValue < 1) {
      gc.type = SurfaceTypeEnum.AIR;
    } else {
      // Get region data that is similar to landscape. This makes grass "follow" the hills
      const zoom = 0.2;
      const terrainValue = this.simplex.noise2D(gc.x * zoom, gc.y * zoom) * 0.5 + 0.5;

      const soilAmount = 0.55;
      if (terrainValue < soilAmount
        // OR, "neighbour cells" and their "neighbours cells", all are NOT air squares. 2 level deep grass
        || (gc.nearCells.cardinalList().every(nc => nc.nearCells.cardinalList()
          .every(innerCell => innerCell.type !== SurfaceTypeEnum.AIR)))) {
        gc.type = SurfaceTypeEnum.SOIL;
      } else if (terrainValue < soilAmount + 0.1) {
        gc.type = SurfaceTypeEnum.BIO;
      } else {
        gc.type = SurfaceTypeEnum.LEAF;
      }
    }

    if (gc.y > this.mapConfig.yMax * 0.8) {
      // Add Bed rock, but on different data that does NOT follow the landscape (.noise3D instead of 2D)
      const zoom = 0.2;
      const terrainValue = this.simplex.noise3D(gc.x * zoom, gc.y * zoom, 0) * 0.5 + 0.5;
      gc.type = (terrainValue < 0.3) ? SurfaceTypeEnum.ROCK : gc.surfaceType;
    }

  });
}
