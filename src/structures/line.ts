/**
 * Line (Level 1) — One-dimensional array of Cells
 * 
 * A Line is a configurable-length array of Cells, where each Cell is an integer
 * in the range 0–9. All Cells are initially zero-valued.
 * 
 * Inspired by Hilma af Klint's grid-based compositions and harmonic proportions.
 * Default length: 13 (first prime in the harmonic series).
 */

import { validateCellArray, validateCell, ZERO_CELL, isInitialValue } from '../validation/cell-validator';

/**
 * Line dimensions and constraints
 */
export interface LineConfig {
  /** Length of the line (number of cells). Default: 13. */
  length?: number;
}

/**
 * A Line is a one-dimensional array of Cells (integers 0–9).
 */
export type Line = number[];

/**
 * Create a new Line with configurable length, zero-initialized.
 * 
 * @param config.length - Number of cells in the line. Defaults to 13.
 * @returns A new Line filled with zero-valued Cells.
 * 
 * @example
 * const line = Line.create(); // Line of length 13, all zeros
 * const customLine = Line.create({ length: 7 }); // Line of length 7, all zeros
 */
export function createLine(config: LineConfig = {}): Line {
  const length: number = config.length !== undefined ? config.length : 13;
  // Validate the length is a positive integer
  if (!Number.isInteger(length) || length < 1) {
    throw new RangeError(`Line length must be a positive integer, got ${length}`);
  }
  // Create array of zeros with the specified length
  const line: Line = new Array(length).fill(ZERO_CELL);
  // Validate all cells (should always pass since we're using ZERO_CELL)
  validateCellArray(line);
  return line;
}

/**
 * Create a Line with custom cell values, validated to be in range 0–9.
 * 
 * @param values - Array of cell values (integers 0–9).
 * @returns A new Line with the specified values.
 * 
 * @example
 * const line = Line.fromValues([0, 1, 2, 3, 4]); // Line of length 5
 */
export function fromValues(values: number[]): Line {
  return validateCellArray(values);
}

/**
 * Get the length of a Line.
 * 
 * @param line - The Line to measure.
 * @returns The number of cells in the Line.
 */
export function getLength(line: Line): number {
  return line.length;
}

/**
 * Get a cell value at a specific index in a Line.
 * 
 * @param line - The Line.
 * @param index - The index of the cell to retrieve.
 * @returns The cell value at the given index.
 * 
 * @throws {RangeError} If index is out of bounds.
 * 
 * @example
 * const line = Line.create();
 * const value = Line.getAt(line, 0); // 0 (or whatever is at index 0)
 */
export function getAt(line: Line, index: number): number {
  if (index < 0 || index >= line.length) {
    throw new RangeError(
      `Index ${index} out of bounds for Line of length ${line.length}`
    );
  }
  return line[index];
}

/**
 * Set a cell value at a specific index in a Line.
 * Validates that the new value is in range 0–9.
 * 
 * @param line - The Line.
 * @param index - The index at which to set the value.
 * @param value - The new cell value (0–9).
 * @returns The updated Line.
 * 
 * @throws {RangeError} If index is out of bounds or value is not in 0–9.
 * 
 * @example
 * const line = Line.create();
 * Line.setAt(line, 0, 5); // Sets first cell to 5
 */
export function setAt(line: Line, index: number, value: number): Line {
  validateCell(value); // This will throw if value is not in 0–9
  const newLine: Line = [...line]; // Create a copy
  newLine[index] = value;
  return newLine;
}

/**
 * Check if a Line is in its initial (zero-valued) state.
 * 
 * @param line - The Line to check.
 * @returns True if all cells are zero, false otherwise.
 * 
 * @example
 * const line = Line.create();
 * Line.isZero(line); // true
 */
export function isZero(line: Line): boolean {
  return line.every((cell) => cell === ZERO_CELL);
}

/**
 * Concatenate two Lines into a new Line.
 * The resulting Line has length equal to the sum of the two Lines.
 * 
 * @param lineA - First Line.
 * @param lineB - Second Line.
 * @returns A new Line containing all cells from both Lines.
 * 
 * @example
 * const lineA = Line.create({ length: 5 });
 * const lineB = Line.create({ length: 3 });
 * const combined = Line.concat(lineA, lineB); // Line of length 8
 */
export function concat(lineA: Line, lineB: Line): Line {
  const result: Line = [...lineA, ...lineB];
  validateCellArray(result);
  return result;
}

/**
 * Get a string representation of a Line.
 * Useful for debugging and logging.
 * 
 * @param line - The Line to represent.
 * @returns A string showing the Line's length and cell values.
 * 
 * @example
 * const line = Line.create({ length: 5 });
 * Line.toString(line); // "Line(length=5, [0,0,0,0,0])"
 */
export function toString(line: Line): string {
  return `Line(length=${line.length}, [${line.map((c) => c).join(', ')}])`;
}

/**
 * Check two Lines for equality (cell-by-cell comparison).
 * 
 * @param lineA - First Line.
 * @param lineB - Second Line.
 * @returns True if both Lines have the same length and cell values.
 * 
 * @example
 * const lineA = Line.create({ length: 3 });
 * const lineB = Line.create({ length: 3 });
 * Line.equals(lineA, lineB); // true
 */
export function equals(lineA: Line, lineB: Line): boolean {
  if (lineA.length !== lineB.length) {
    return false;
  }
  for (let i = 0; i < lineA.length; i++) {
    if (lineA[i] !== lineB[i]) {
      return false;
    }
  }
  return true;
}