export class TextExtractor {
    
    static extractCliArg() {
      const [, , ...inputParams] = process.argv;
      if (!inputParams.length) {
        throw new Error("No input text found, please try again with valid text");
      }
      return inputParams.join(" ");
    }
  

  }