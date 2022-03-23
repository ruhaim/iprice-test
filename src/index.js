import { TextExtractor } from "./TextExtractor.js";
import { TextOutputter } from "./TextOutputter.js";

class TaskRunner {
  static run() {
    const userInput = TextExtractor.extractCliArg();

    const textOutputter = new TextOutputter(TextOutputter.DEFAULT_STRATEGIES);
    textOutputter.output(userInput);
  }
}

TaskRunner.run();
