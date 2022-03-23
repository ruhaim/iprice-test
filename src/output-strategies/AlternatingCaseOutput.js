import { IOutputStrategy } from "./IOutputStrategy.js";

/**
 * Strategy to convert a string to alternate upper and lower case
 * eg- hello world --> hElLo wOrLd
 * @extends IOutputStrategy
 */
export class AlternatingCaseOutput extends IOutputStrategy {
  output(text) {
    return text
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
  }
}
