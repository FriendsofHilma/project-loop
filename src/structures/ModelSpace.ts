/**
 * Model Space (Level 3) — Three-dimensional tensor of Planes
 * 
 * A Model Space is an array of Planes, forming a three-dimensional tensor of Cells.
 * All Cells are initially zero-valued. Dimensions are configurable.
 * 
 * This is the primary structure for three-dimensional visualization, inspired by
 * Hilma af Klint's spatial compositions and the painting provided as visual reference.
 * Default dimensions: 13 × 13 × 13 (cubic tensor).
 */

import { Plane, createPlane, getRows, getCols } from './plane';
import { validateCellArray, ZERO_CELL } from '../validation/cell-validator';

/**
 * Model Space dimensions and constraints
 */
export interface ModelSpaceConfig {
  /** Number of Planes (depth). Default: 13. */
  planes?: number;
  /** Number of rows in each Plane. Default: 13. */
  rows?: number;
  /** Number of columns in each Plane. Default: 13. */
  cols?: number;
}

/**
 * A Model Space is a three-dimensional tensor of Cells, represented as an array of Planes.
 * Each Plane within the Model Space has the same dimensions (rows × columns).
 * All Cells are integers in the range 0–9, initially zero-valued.
 */
export type ModelSpace = Plane[];

/**
 * Create a new Model Space with configurable dimensions, zero-initialized.
 * 
 * @param config.planes - Number of Planes in the tensor. Defaults to 13.
 * @param config.rows - Number of rows in each Plane. Defaults to 13.
 * @param config.cols - Number of columns in each Plane. Defaults to 13.
 * @returns A new Model Space filled with zero-valued Cells.
 * 
 * @example
 * const modelSpace = ModelSpace.create(); // 13 × 13 × 13 cubic tensor, all zeros
 * const customModelSpace = ModelSpace.create({ planes: 5, rows: 7, cols: 7 }); // 5 × 7 × 7
 */
export function createConfig(config: ModelSpaceConfig = {}): ModelSpace {
  const planes: number = config.planes !== undefined ? config.planes : 13;
  const rows: number = config.rows !== undefined ? config.rows : 13;
  const cols: number = config.cols !== undefined ? config.cols : 13;

  // Validate dimensions
  if (!Number.isInteger(planes) || planes < 1) {
    throw new RangeError(`Model Space planes must be a positive integer, got ${planes}`);
  }
  if (!Number.isInteger(rows) || rows < 1) {
    throw new RangeError(`Model Space rows must be a positive integer, got ${rows}`);
  }
  if (!Number.isInteger(cols) || cols < 1) {
    throw new RangeError(`Model Space cols must be a positive integer, got ${cols}`);
  }

  // Create 'planes' Planes, each of dimensions rows × cols, filled with zeros
  const modelSpace: ModelSpace = new Array(planes).fill(null).map(() =>
    createPlane({ rows, cols })
  );

  // Validate all cells (should always pass since we're using ZERO_CELL)
  // Need flat(2) to flatten: ModelSpace[plane][row][cell] -> cell values
  validateCellArray(modelSpace.flat(2));

  return modelSpace;
}

/**
 * Create a Model Space from an array of Planes, validating all cells.
 * 
 * @param planes - Array of Planes, each with the same dimensions.
 * @returns A new Model Space with the specified Planes.
 * 
 * @throws {RangeError} If Planes have inconsistent dimensions or invalid cell values.
 * 
 * @example
 * const plane1 = Plane.create({ rows: 3, cols: 3 });
 * const plane2 = Plane.create({ rows: 3, cols: 3 });
 * const modelSpace = ModelSpace.fromPlanes([plane1, plane2]); // 2 × 3 × 3 tensor
 */
export function fromPlanes(planes: Plane[]): ModelSpace {
  if (planes.length === 0) {
    return [];
  }

  const planeRows = getRows(planes[0]);
  const planeCols = getCols(planes[0]);

  // Validate that all Planes have the same dimensions
  for (let i = 1; i < planes.length; i++) {
    const currRows = getRows(planes[i]);
    const currCols = getCols(planes[i]);
    if (currRows !== planeRows || currCols !== planeCols) {
      throw new RangeError(
        `All Planes in a Model Space must have the same dimensions. Plane ${i} has ${currRows} × ${currCols}, expected ${planeRows} × ${planeCols}`
      );
    }
  }

  // Validate all cells in all Planes
  const modelSpace: ModelSpace = [];
  for (let i = 0; i < planes.length; i++) {
    // Validate all rows and cells in each Plane
    for (let r = 0; r < planes[i].length; r++) {
      validateCellArray(planes[i][r]);
    }
    modelSpace.push(planes[i]);
  }

  return modelSpace;
}

/**
 * Get the number of Planes in a Model Space (depth dimension).
 * 
 * @param modelSpace - The Model Space to measure.
 * @returns The number of Planes.
 */
export function getPlanes(modelSpace: ModelSpace): number {
  return modelSpace.length;
}

/**
 * Get the number of rows in each Plane of a Model Space.
 * 
 * @param modelSpace - The Model Space to measure.
 * @returns The number of rows per Plane.
 */
export function getRows3D(modelSpace: ModelSpace): number {
  if (modelSpace.length === 0) {
    return 0;
  }
  return getRows(modelSpace[0]);
}

/**
 * Get the number of columns in each Plane of a Model Space.
 * 
 * @param modelSpace - The Model Space to measure.
 * @returns The number of columns per Plane.
 */
export function getCols3D(modelSpace: ModelSpace): number {
  if (modelSpace.length === 0) {
    return 0;
  }
  return getCols(modelSpace[0]);
}

/**
 * Get the cell value at a specific position (plane, row, column) in a Model Space.
 * 
 * @param modelSpace - The Model Space.
 * @param plane - The plane index (0-based).
 * @param row - The row index (0-based).
 * @param col - The column index (0-based).
 * @returns The cell value at the given position.
 * 
 * @throws {RangeError} If any index is out of bounds.
 * 
 * @example
 * const modelSpace = ModelSpace.create(); // 13 × 13 × 13
 * const value = ModelSpace.getAt(modelSpace, 1, 1, 1); // 0 (center cell in center plane)
 */
export function getAt(modelSpace: ModelSpace, plane: number, row: number, col: number): number {
  const nPlanes = getPlanes(modelSpace);
  const nRows = getRows3D(modelSpace);
  const nCols = getCols3D(modelSpace);

  if (plane < 0 || plane >= nPlanes) {
    throw new RangeError(
      `Plane index ${plane} out of bounds for Model Space with ${nPlanes} planes`
    );
  }
  if (row < 0 || row >= nRows) {
    throw new RangeError(
      `Row index ${row} out of bounds for Model Space with ${nRows} rows`
    );
  }
  if (col < 0 || col >= nCols) {
    throw new RangeError(
      `Column index ${col} out of bounds for Model Space with ${nCols} columns`
    );
  }

  return modelSpace[plane][row][col];
}

/**
 * Set a cell value at a specific position (plane, row, column) in a Model Space.
 * Validates that the new value is in range 0–9.
 * 
 * @param modelSpace - The Model Space.
 * @param plane - The plane index (0-based).
 * @param row - The row index (0-based).
 * @param col - The column index (0-based).
 * @param value - The new cell value (0–9).
 * @returns The updated Model Space.
 * 
 * @throws {RangeError} If any index is out of bounds or value is not in 0–9.
 * 
 * @example
 * const modelSpace = ModelSpace.create(); // 13 × 13 × 13
 * ModelSpace.setAt(modelSpace, 1, 1, 1, 5); // Sets center cell in center plane to 5
 */
export function setAt(modelSpace: ModelSpace, plane: number, row: number, col: number, value: number): ModelSpace {
  // Validate the value is in range 0-9
  if (typeof value !== 'number' || value < 0 || value > 9) {
    throw new RangeError(
      `Cell value must be between 0 and 9, got ${value}`
    );
  }
  const newModelSpace: ModelSpace = modelSpace.map((p) => p.map((rowL) => [...rowL])); // Deep copy
  newModelSpace[plane][row][col] = value;
  return newModelSpace;
}

/**
 * Check if a Model Space is in its initial (zero-valued) state.
 * 
 * @param modelSpace - The Model Space to check.
 * @returns True if all cells are zero, false otherwise.
 * 
 * @example
 * const modelSpace = ModelSpace.create();
 * ModelSpace.isZero(modelSpace); // true
 */
export function isZero(modelSpace: ModelSpace): boolean {
  for (let p = 0; p < modelSpace.length; p++) {
    for (let r = 0; r < modelSpace[p].length; r++) {
      for (let c = 0; c < modelSpace[p][r].length; c++) {
        if (modelSpace[p][r][c] !== ZERO_CELL) {
          return false;
        }
      }
    }
  }
  return true;
}

/**
 * Concatenate two Model Spaces along the plane dimension (depth).
 * The resulting Model Space has combined planes, but the same rows × cols.
 * Both Model Spaces must have the same rows × cols dimensions.
 * 
 * @param modelSpaceA - First Model Space.
 * @param modelSpaceB - Second Model Space.
 * @returns A new Model Space with combined planes.
 * 
 * @throws {RangeError} If Model Spaces have different rows × cols dimensions.
 * 
 * @example
 * const modelSpaceA = ModelSpace.create({ planes: 2, rows: 3, cols: 3 });
 * const modelSpaceB = ModelSpace.create({ planes: 3, rows: 3, cols: 3 });
 * const combined = ModelSpace.concatDepth(modelSpaceA, modelSpaceB); // 5 × 3 × 3 Model Space
 */
export function concatDepth(modelSpaceA: ModelSpace, modelSpaceB: ModelSpace): ModelSpace {
  const planesA = modelSpaceA.length;
  const planesB = modelSpaceB.length;
  const rowsA = getRows3D(modelSpaceA);
  const colsA = getCols3D(modelSpaceA);
  const rowsB = getRows3D(modelSpaceB);
  const colsB = getCols3D(modelSpaceB);

  if (rowsA !== rowsB || colsA !== colsB) {
    throw new RangeError(
      `Model Spaces must have the same rows × cols dimensions. Got ${rowsA} × ${colsA} and ${rowsB} × ${colsB}`
    );
  }

  const combined: ModelSpace = [...modelSpaceA, ...modelSpaceB];
  validateCellArray(combined.flat(2));
  return combined;
}

/**
 * Get a string representation of a Model Space.
 * Useful for debugging and logging.
 * 
 * @param modelSpace - The Model Space to represent.
 * @returns A string showing the Model Space's dimensions and cell values.
 * 
 * @example
 * const modelSpace = ModelSpace.create({ planes: 2, rows: 2, cols: 2 });
 * ModelSpace.toString(modelSpace); // "ModelSpace(planes=2, rows=2, cols=2, cells=...)"
 */
export function toString(modelSpace: ModelSpace): string {
  const nPlanes = getPlanes(modelSpace);
  const nRows = getRows3D(modelSpace);
  const nCols = getCols3D(modelSpace);

  // Sample some cell values for display
  const samples: number[] = [];
  for (let p = 0; p < Math.min(nPlanes, 2); p++) {
    for (let r = 0; r < Math.min(nRows, 2); r++) {
      for (let c = 0; c < Math.min(nCols, 2); c++) {
        samples.push(modelSpace[p][r][c]);
      }
    }
  }

  return `ModelSpace(planes=${nPlanes}, rows=${nRows}, cols=${nCols}, cells=[${samples.join(', ')}...])`;
}

/**
 * Check two Model Spaces for equality (cell-by-cell comparison).
 * 
 * @param modelSpaceA - First Model Space.
 * @param modelSpaceB - Second Model Space.
 * @returns True if both Model Spaces have the same dimensions and cell values.
 * 
 * @example
 * const modelSpaceA = ModelSpace.create({ planes: 2, rows: 2, cols: 2 });
 * const modelSpaceB = ModelSpace.create({ planes: 2, rows: 2, cols: 2 });
 * ModelSpace.equals(modelSpaceA, modelSpaceB); // true
 */
export function equals(modelSpaceA: ModelSpace, modelSpaceB: ModelSpace): boolean {
  const planesA = modelSpaceA.length;
  const planesB = modelSpaceB.length;

  if (planesA !== planesB) {
    return false;
  }

  const rowsA = getRows3D(modelSpaceA);
  const rowsB = getRows3D(modelSpaceB);

  if (rowsA !== rowsB) {
    return false;
  }

  const colsA = getCols3D(modelSpaceA);
  const colsB = getCols3D(modelSpaceB);

  if (colsA !== colsB) {
    return false;
  }

  for (let p = 0; p < planesA; p++) {
    for (let r = 0; r < rowsA; r++) {
      for (let c = 0; c < colsA; c++) {
        if (modelSpaceA[p][r][c] !== modelSpaceB[p][r][c]) {
          return false;
        }
      }
    }
  }

  return true;
}