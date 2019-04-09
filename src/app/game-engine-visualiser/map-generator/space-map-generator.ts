import {
  flatMap,
  } from '../static-functions';
import * as SimplexNoise from 'simplex-noise';
import { GridsCell, ImageProcessingInfo, MapConfig, NearCells, SurfaceTypeEnum } from '../game-engine-visualiser.interface';
import { euclideanDistance, intRange } from '../static-functions';

export function addBattleRoyaleLandscape(flatTemplate: GridsCell[], mapConfig: MapConfig) {

  let mapCenter = mapConfig.getCenter();
  let radiusFit = mapConfig.getRadius();



  flatTemplate.forEach(c => {
    if (euclideanDistance(c, mapCenter) >= radiusFit) {
      c.type = SurfaceTypeEnum.ROCK;
    }
  })

}

export function makeSpaceMap(flatTemplate) {
  const amountOfSoil = 0.45;
  flatTemplate.forEach(gc => {
    if (gc.ipInfo.srcValue < amountOfSoil) {
      gc.type = SurfaceTypeEnum.DIRT;
    } else {
      gc.type = SurfaceTypeEnum.DEEP_SPACE;
    }
  });
}

export function generateMapTemplate(mapConfig: MapConfig, simplex: SimplexNoise) {
  // Make a map sized array of arrays. Arranged as a[x][y]. On screen, Y "ascends" DOWNWARDS
  const template = intRange(mapConfig.xMax + 1)
    .map(i => <GridsCell[]>intRange(mapConfig.yMax + 1)
      .map(j => <GridsCell>({
        x: i,
        y: j,
        nearCells: new NearCells(),
        ipInfo: new ImageProcessingInfo(),
      })));


  const flatTemplate = flatMap<GridsCell>(template);
  // Setup neighbour cells for every cell
  flatTemplate.forEach(gc => {
    gc.nearCells.above = template[gc.x][gc.y - 1];
    gc.nearCells.below = template[gc.x][gc.y + 1];
    gc.nearCells.left = (template[gc.x - 1] || [])[gc.y];
    gc.nearCells.right = (template[gc.x + 1] || [])[gc.y];

  // Add landscape template data (like where the mountains are)
    const zoom = 0.2;
    gc.ipInfo.srcValue = simplex.noise2D(gc.x * zoom, gc.y * zoom) * 0.5 + 0.5;
  });

  // Use landscape data to define rock regions
  makeSpaceMap(flatTemplate);
  addBattleRoyaleLandscape(flatTemplate, mapConfig);

  return template;
}
