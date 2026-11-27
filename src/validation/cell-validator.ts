/**
 * Cell Validator
 * 
 * Validates that cell values remain in the range 0–9 as specified in the
 * Cosmic Block project.
 */

/**
 * Validate a single cell value.
 * Returns the validated value, or throws if out of range.
 * 
 * @param value - The value to validate.
 * @returns The validated number value.
 * @throws {TypeError} If value is not a number.
 * @throws {RangeError} If value is not in range 0–9.
 */
export function validateCell(value: unknown): number {
  if (typeof value !== 'number') {
    throw new TypeError(`Cell value must be a number, got ${typeof value}`);
  }
  if (value < 0 || value > 9) {
    throw new RangeError(
      `Cell value must be between 0 and 9, got ${value}`
    );
  }
  return value;
}

/**
 * Validate that all values in an array are valid cell values.
 * Returns a new array with only validated number values.
 * 
 * @param values - The array of values to validate.
 * @returns A new array containing only validated number values.
 * @throws {TypeError} If any value is not a number.
 * @throws {RangeError} If any value is not in range 0–9.
 */
export function validateCellArray(values: unknown[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < values.length; i++) {
    const validated = validateCell(values[i]);
    result.push(validated);
  }
  return result;
}

/**
 * Create a cell value initialized to 0 (the default for Cosmic Block).
 */
export const ZERO_CELL: number = 0;

/**
 * Check if a value is a valid initial cell value (i.e., zero).
 * 
 * @param value - The value to check.
 * @returns True if the value is exactly 0, false otherwise.
 */
export function isInitialValue(value: unknown): boolean {
  return typeof value === 'number' && value === ZERO_CELL;
}