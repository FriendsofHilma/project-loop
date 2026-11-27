const cs = require('../dist');

// Level 4
const coll = cs.createCollectionModelSpaces({ count: 5, planes: 3, rows: 3, cols: 3 });
console.log('L4 count:', cs.getCountCollection(coll));
console.log('L4 zero:', cs.isZeroCollection(coll));
console.log('L4 dims:', cs.getPlanesPerMsCollection(coll), cs.getRowsPerMsCollection(coll), cs.getColsPerMsCollection(coll));

const coll2 = cs.setCellValueCollection(coll, 2, 1, 1, 1, 7);
console.log('L4 after set:', cs.getCellValueCollection(coll2, 2, 1, 1, 1));
console.log('L4 diff:', cs.collectionEquals(coll, coll2));

// Level 5
const ho = cs.createHigherOrder({ count: 2, collectionCount: 5, planes: 3, rows: 3, cols: 3 });
console.log('L5 count:', cs.getHoCountCollection(ho));
console.log('L5 zero:', cs.hoIsZero(ho));
console.log('L5 dims:', cs.getPlanesPerHoCollection(ho), cs.getRowsPerHoCollection(ho), cs.getColsPerHoCollection(ho));
console.log('L5:', cs.hoToString(ho));

// getAtHoCollection
const collAt0 = cs.getAtHoCollection(ho, 0);
console.log('L5 getAt index 0 count:', cs.getCountCollection(collAt0));

// getCellValueHo / setCellValueHo
const ho2 = cs.setCellValueHo(ho, 1, 2, 1, 1, 1, 7);
console.log('L5 after set:', cs.getCellValueHo(ho2, 1, 2, 1, 1, 1));
console.log('L5 original unchanged:', cs.getCellValueHo(ho, 1, 2, 1, 1, 1));
console.log('L5 diff:', cs.hoEquals(ho, ho2));

// default cell values preserved
console.log('L1 default len:', cs.createLine().length);
console.log('L3 default dims:', cs.getPlanes(cs.createConfig()), cs.getRows3D(cs.createConfig()), cs.getCols3D(cs.createConfig()));
console.log('colors:', cs.getColorHex(0), cs.getColorHex(9));
