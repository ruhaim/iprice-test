import { IOutputStrategy } from "./IOutputStrategy.js";
import fs from "fs";

/**
 * Strategy to create a CSV file from a string
 * @extends IOutputStrategy
 */
export class CsvOutput extends IOutputStrategy {
  #filePath;

  /**
   * Create a point.
   * @param {string} filePath - The path to which the file needs to be output
   */
  constructor(filePath) {
    super();
    this.#filePath = filePath;
  }

  /**
   * Convert a string csv and write to a file.
   * @param {string} text - The string to be converted to csv text, 
   * the file will be written at the {filepath} defined at the constructor.
   * @return {string} "CSV created!" if the file created succeeds.
   */
  output(text) {
    const csvText = this.#toCsvText(text);
    this.#writeToFile(csvText);
    return "CSV created!";
  }

  #toCsvText(text) {
    return text.split("").join(",");
  }

  #writeToFile(text) {
    fs.writeFileSync(this.#filePath, text);
  }
}
