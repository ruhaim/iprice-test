import { AlternatingCaseOutput } from "./output-strategies/AlternatingCaseOutput.js";
import { CsvOutput } from "./output-strategies/CsvOutput.js";
import { IOutputStrategy } from "./output-strategies/IOutputStrategy.js";
import { UpperCaseOutput } from "./output-strategies/UpperCaseOutput.js";

/**
 * Class that handles the output based on the strategies assigned to it
 */
export class TextOutputter {
  #strategies;

  /**
   * An array of default strategies defined in the business logic
   */
  static DEFAULT_STRATEGIES = [
    new UpperCaseOutput(),
    new AlternatingCaseOutput(),
    new CsvOutput("./data.csv"),
  ];

  /**
   * Create a point.
   * @param {IOutputStrategy[]} strategies - Array of IOutputStrategies that will be executed on output
   */
  constructor(strategies) {
    this.#strategies = strategies;
  }

  /**
   * Transform text based on assigned strategies and print result to console.
   * @param {string} text - The string to be transformed
   * @return {void}
   * @throws {Error} if one of the strategies errors out
   */
  output(text) {
    this.#strategies.forEach((strategy) => {
      try{
        const strategyOutput = strategy.output(text);
        console.log(strategyOutput);
      }catch(e){
        console.error("Something went wrong in output()", e)
      }
    });
  }
}
