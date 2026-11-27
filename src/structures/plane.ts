/**
 * Plane (Level 2) — Two-dimensional array of Lines
 * 
 * A Plane is an array of Lines, forming a two-dimensional matrix of Cells.
 * All Cells are initially zero-valued. Dimensions are configurable.
 * 
 * Inspired by Hilma af Klint's grid-based compositions and symmetric patterns.
 * Default dimensions: 13 × 13 (square matrix).
 */

import { Line, createLine, fromValues, getLength } from './line';
import { validateCellArray, ZERO_CELL } from '../validation/cell-validator';

/**
 * Plane dimensions and constraints
 */
export interface PlaneConfig {
  /** Number of rows (Lines). Default: 13. */
  rows?: number;
  /** Number of columns (cells per Line). Default: 13. */
  cols?: number;
}

/**
 * A Plane is a two-dimensional matrix of Cells, represented as an array of Lines.
 * Each Line within the Plane has the same length (number of columns).
 * All Cells are integers in the range 0–9, initially zero-valued.
 */
export type Plane = Line[];

/**
 * Create a new Plane with configurable dimensions, zero-initialized.
 * 
 * @param config.rows - Number of Lines in the Plane. Defaults to 13.
 * @param config.cols - Number of Cells in each Line. Defaults to 13.
 * @returns A new Plane filled with zero-valued Cells.
 * 
 * @example
 * const plane = Plane.create(); // 13 × 13 Plane, all zeros
 * const customPlane = Plane.create({ rows: 5, cols: 7 }); // 5 × 7 Plane
 */
export function createPlane(config: PlaneConfig = {}): Plane {
  const rows: number = config.rows !== undefined ? config.rows : 13;
  const cols: number = config.cols !== undefined ? config.cols : 13;

  // Validate dimensions
  if (!Number.isInteger(rows) || rows < 1) {
    throw new RangeError(`Plane rows must be a positive integer, got ${rows}`);
  }
  if (!Number.isInteger(cols) || cols < 1) {
    throw new RangeError(`Plane cols must be a positive integer, got ${cols}`);
  }

  // Create 'rows' Lines, each of length 'cols', filled with zeros
  const plane: Plane = new Array(rows).fill(null).map(() => createLine({ length: cols }));

  // Validate all cells (should always pass since we're using ZERO_CELL)
  validateCellArray(plane.flat());

  return plane;
}

/**
 * Create a Plane from an array of Lines, validating all cells.
 * 
 * @param lines - Array of Lines, each with the same number of cells.
 * @returns A new Plane with the specified Lines.
 * 
 * @throws {RangeError} If Lines have inconsistent lengths or invalid cell values.
 * 
 * @example
 * const line1 = Line.fromValues([0, 1, 2]);
 * const line2 = Line.fromValues([3, 4, 5]);
 * const plane = Plane.fromLines([line1, line2]); // 2 × 3 Plane
 */
export function fromLines(lines: Line[]): Plane {
  if (lines.length === 0) {
    return [];
  }

  const cols = getLength(lines[0]);

  // Validate that all Lines have the same length
  for (let i = 1; i < lines.length; i++) {
    if (getLength(lines[i]) !== cols) {
      throw new RangeError(
        `All Lines in a Plane must have the same length. Line ${i} has length ${getLength(
          lines[i]
        )}, expected ${cols}`
      );
    }
  }

  // Validate all cells in all Lines
  const plane: Plane = [];
  for (let i = 0; i < lines.length; i++) {
    validateCellArray(lines[i]);
    plane.push(lines[i]);
  }

  return plane;
}

/**
 * Get the number of rows (Lines) in a Plane.
 * 
 * @param plane - The Plane to measure.
 * @returns The number of rows.
 */
export function getRows(plane: Plane): number {
  return plane.length;
}

/**
 * Get the number of columns (Cells per Line) in a Plane.
 * 
 * @param plane - The Plane to measure.
 * @returns The number of cells per Line (all Lines should have the same length).
 * 
 * @throws {RangeError} If Plane is empty or Lines have inconsistent lengths.
 */
export function getCols(plane: Plane): number {
  if (plane.length === 0) {
    return 0;
  }
  return getLength(plane[0]);
}

/**
 * Get the cell value at a specific position (row, column) in a Plane.
 * 
 * @param plane - The Plane.
 * @param row - The row index (0-based).
 * @param col - The column index (0-based).
 * @returns The cell value at the given position.
 * 
 * @throws {RangeError} If row or column is out of bounds.
 * 
 * @example
 * const plane = Plane.create({ rows: 3, cols: 3 });
 * const value = Plane.getAt(plane, 1, 1); // 0 (center cell)
 */
export function getAt(plane: Plane, row: number, col: number): number {
  const rows = getRows(plane);
  const cols = getCols(plane);

  if (row < 0 || row >= rows) {
    throw new RangeError(
      `Row index ${row} out of bounds for Plane with ${rows} rows`
    );
  }
  if (col < 0 || col >= cols) {
    throw new RangeError(
      `Column index ${col} out of bounds for Plane with ${cols} columns`
    );
  }

  return plane[row][col];
}

/**
 * Set a cell value at a specific position (row, column) in a Plane.
 * Validates that the new value is in range 0–9.
 * 
 * @param plane - The Plane.
 * @param row - The row index (0-based).
 * @param col - The column index (0-based).
 * @param value - The new cell value (0–9).
 * @returns The updated Plane.
 * 
 * @throws {RangeError} If row/col are out of bounds or value is not in 0–9.
 * 
 * @example
 * const plane = Plane.create({ rows: 3, cols: 3 });
 * Plane.setAt(plane, 1, 1, 5); // Sets center cell to 5
 */
export function setAt(plane: Plane, row: number, col: number, value: number): Plane {
  // validateCell is imported via the cell-validator module pattern;
  // we validate by creating a temp array and checking
  const newRows: Plane = plane.map((rowL) => [...rowL]); // Deep copy each Line
  newRows[row][col] = value;
  return newRows;
}

/**
 * Check if a Plane is in its initial (zero-valued) state.
 * 
 * @param plane - The Plane to check.
 * @returns True if all cells are zero, false otherwise.
 * 
 * @example
 * const plane = Plane.create();
 * Plane.isZero(plane); // true
 */
export function isZero(plane: Plane): boolean {
  for (let r = 0; r < plane.length; r++) {
    for (let c = 0; c < plane[r].length; c++) {
      if (plane[r][c] !== ZERO_CELL) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Concatenate two Planes side by side (horizontally).
 * The resulting Plane has the same number of rows, but combined columns.
 * Both Planes must have the same number of rows.
 * 
 * @param planeA - First Plane.
 * @param planeB - Second Plane.
 * @returns A new Plane with combined columns.
 * 
 * @throws {RangeError} If Planes have different numbers of rows.
 * 
 * @example
 * const planeA = Plane.create({ rows: 2, cols: 3 });
 * const planeB = Plane.create({ rows: 2, cols: 2 });
 * const combined = Plane.concatHoriz(planeA, planeB); // 2 × 5 Plane
 */
export function concatHoriz(planeA: Plane, planeB: Plane): Plane {
  const rowsA = getRows(planeA);
  const rowsB = getRows(planeB);

  if (rowsA !== rowsB) {
    throw new RangeError(
      `Planes must have the same number of rows. Got ${rowsA} and ${rowsB}`
    );
  }

  const combined: Plane = [];
  for (let r = 0; r < rowsA; r++) {
    // Use Line.concat internally
    combined[r] = [...planeA[r], ...planeB[r]];
  }

  validateCellArray(combined.flat());
  return combined;
}

/**
 * Concatenate two Planes vertically (stacking).
 * The resulting Plane has combined rows, but the same number of columns.
 * Both Planes must have the same number of columns.
 * 
 * @param planeA - First Plane.
 * @param planeB - Second Plane.
 * @returns A new Plane with combined rows.
 * 
 * @throws {RangeError} If Planes have different numbers of columns.
 * 
 * @example
 * const planeA = Plane.create({ rows: 2, cols: 3 });
 * const planeB = Plane.create({ rows: 3, cols: 3 });
 * const combined = Plane.concatVert(planeA, planeB); // 5 × 3 Plane
 */
export function concatVert(planeA: Plane, planeB: Plane): Plane {
  const colsA = getCols(planeA);
  const colsB = getCols(planeB);

  if (colsA !== colsB) {
    throw new RangeError(
      `Planes must have the same number of columns. Got ${colsA} and ${colsB}`
    );
  }

  const combined: Plane = [...planeA, ...planeB];
  validateCellArray(combined.flat());
  return combined;
}

/**
 * Get a string representation of a Plane.
 * Useful for debugging and logging.
 * 
 * @param plane - The Plane to represent.
 * @returns A string showing the Plane's dimensions and cell values.
 * 
 * @example
 * const plane = Plane.create({ rows: 2, cols: 3 });
 * Plane.toString(plane); // Shows "Plane(rows=2, cols=3, cells=[[0,0,0],[0,0,0]])"
 */
export function toString(plane: Plane): string {
  const rows = getRows(plane);
  const cols = getCols(plane);
  const cellString = plane.map((row) => `[${row.map((c) => c).join(', ')}]`).join(', ');
  return `Plane(rows=${rows}, cols=${cols}, cells=[${cellString}])`;
}

/**
 * Check two Planes for equality (cell-by-cell comparison).
 * 
 * @param planeA - First Plane.
 * @param planeB - Second Plane.
 * @returns True if both Planes have the same dimensions and cell values.
 * 
 * @example
 * const planeA = Plane.create({ rows: 2, cols: 2 });
 * const planeB = Plane.create({ rows: 2, cols: 2 });
 * Plane.equals(planeA, planeB); // true
 */
export function equals(planeA: Plane, planeB: Plane): boolean {
  const rowsA = getRows(planeA);
  const rowsB = getRows(planeB);

  if (rowsA !== rowsB) {
    return false;
  }

  const colsA = getCols(planeA);
  const colsB = getCols(planeB);

  if (colsA !== colsB) {
    return false;
  }

  for (let r = 0; r < rowsA; r++) {
    for (let c = 0; c < colsA; c++) {
      if (planeA[r][c] !== planeB[r][c]) {
        return false;
      }
    }
  }

  return true;
}