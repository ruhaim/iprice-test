/**
 * Strategy to transform userInput string, since ES6 js does 
 * not support interfaces, this is defined as a class, 
 * in real world this class should always be extended before being used
 */
export class IOutputStrategy {
  /**
   * Transforms a string according to rules defined in the 
   * extending Strategy.
   * @param {string} text - The string to be converted.
   * @throws {Error} if tried to use directly, this method 
   * is intended to be always overridden
   */
  output(text) {
    throw new Error("output(text) needs to be defined");
  }
}
