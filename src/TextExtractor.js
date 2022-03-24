/**
 * Class that holds the function to read the inputText via CLI args
 */
export class TextExtractor {
  /**
   * extracts the input text from the commandline arguments
   * used when executing the script
   * @return {void} - Logs an error for each strategry that fails
   * @throws {Error} if no argument is passed
   */
  static extractCliArg() {
    const [, , ...inputParams] = process.argv;
    if (!inputParams.length) {
      throw new Error("No input text found, please try again with valid text");
    }
    return inputParams.join(" ");
  }
}
