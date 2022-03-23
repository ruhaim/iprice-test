import { IOutputStrategy } from "./IOutputStrategy.js";

/**
 * Strategy to convert a string to uppercase
 * eg- hello world --> HELLO WORLD
 * @extends IOutputStrategy
 */
export class UpperCaseOutput extends IOutputStrategy {
  /**
   * Convert a string to uppercase.
   * @param {string} text - The string to be converted.
   * @return {string} uppercase string of the @param text.
   */
  output(text) {
    return text.toUpperCase();
  }
}
