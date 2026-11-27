/**
 * Cosmic Block — Structural Types and Implementations
 * 
 * Hierarchical mathematical structure composed of nested arrays of integers (0–9).
 * 
 * Levels:
 *   Level 1 — Line: 1D array of Cells
 *   Level 2 — Plane: 2D array of Lines
 *   Level 3 — Model Space: 3D array of Planes
 *   Level 4 — Collection of Model Spaces (5 instances, af Klint series)
 *   Level 5 — Higher-order Collection (2 instances, complementary pair)
 *   Level 7 — Unspecified (pending clarification)
 *   Level 8 — Complementary Line (pending clarification)
 *   Level 9 — Unspecified (pending clarification)
 */

/* Core types */
export { validateCell, ZERO_CELL, isInitialValue } from './validation/cell-validator';

/* Level 1 — Line */
export { createLine, Line, LineConfig, fromValues, getLength, getAt, setAt, isZero as lineIsZero, concat, toString, equals } from './structures/line';

/* Level 2 — Plane */
export { createPlane, Plane, PlaneConfig, fromLines, getRows, getCols, getAt as planeGetAt, setAt as planeSetAt, isZero as planeIsZero, concatHoriz, concatVert, toString as planeToString, equals as planeEquals } from './structures/plane';

/* Level 3 — Model Space */
export { createConfig, ModelSpace, ModelSpaceConfig, fromPlanes, getPlanes, getRows3D, getCols3D, getAt as modelSpaceGetAt, setAt as modelSpaceSetAt, isZero as modelSpaceIsZero, concatDepth, toString as modelSpaceToString, equals as modelSpaceEquals } from './structures/ModelSpace';

/* Level 4 — Collection of Model Spaces */
export { 
  CollectionModelSpaces, 
  CollectionModelSpacesConfig, 
  createCollection as createCollectionModelSpaces,
  fromCollectionModelSpaces,
  getCountCollection,
  getPlanesPerMsCollection,
  getRowsPerMsCollection,
  getColsPerMsCollection,
  getAtCollection,
  getCellValueCollection,
  setCellValueCollection,
  isZeroCollection,
  collectionEquals,
  collectionConcatDepth,
  collectionToString 
} from './structures/collection/collection-model-spaces';

/* Level 5 — Higher-order Collection */
export { 
  HigherOrderCollection,
  HigherOrderCollectionConfig,
  createHigherOrder,
  fromHigherOrderCollections,
  getHoCountCollection,
  getPlanesPerHoCollection,
  getRowsPerHoCollection,
  getColsPerHoCollection,
  getAtHoCollection,
  getCellValueHo,
  setCellValueHo,
  hoIsZero,
  hoEquals,
  hoConcatDepth,
  hoToString 
} from './structures/collection/collection-higher-order';

/* Visualization */
export { 
  afKlintColors, 
  getColorForValue, 
  getColorHex, 
  Visualization, 
  createScene, 
  createPointCloud, 
  animate, 
  VisualizationOptions,
  getDefaultModelSpace 
} from './visualization/visualization';