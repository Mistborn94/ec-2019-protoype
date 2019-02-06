import {
  euclideanDistance,
  flatMap,
  GridsCell,
  ImageProcessingInfo,
  intRange,
  MapConfig,
  NearCells,
  SurfaceTypeEnum,
} from './page-data-and-information.component';
import * as SimplexNoise from 'simplex-noise';

export function addBattleRoyaleLandscape(flatTemplate: GridsCell[], mapConfig: MapConfig) {

  let mapCenter = {
    x: ((mapConfig.xMax + 1) / 2) - 0.5,
    y: ((mapConfig.yMax + 1) / 2) - 0.5,
  };
  let radiusFit = Math.min(mapCenter.x, mapCenter.y) + 1;



  flatTemplate.forEach(c => {
    if (euclideanDistance(c, mapCenter) >= radiusFit) {
      c.surfaceType = SurfaceTypeEnum.ROCK;
    }
  })

}

export function makeSpaceMap(flatTemplate) {
  const amountOfSoil = 0.45;
  flatTemplate.forEach(gc => {
    if (gc.ipInfo.srcValue < amountOfSoil) {
      gc.surfaceType = SurfaceTypeEnum.ASTEROID;
    } else {
      gc.surfaceType = SurfaceTypeEnum.SPACE;
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
