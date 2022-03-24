import { jest } from "@jest/globals";
import fs from 'fs';
import { UpperCaseOutput } from "../output-strategies/UpperCaseOutput.js";
import { TextOutputter } from "../TextOutputter.js";


jest.spyOn(console, "log").mockImplementation();
jest.spyOn(console, "error").mockImplementation();
jest.spyOn(fs, "writeFileSync").mockImplementation();


function runTextOutput(strategies, text) {
  new TextOutputter(strategies).output(text);
}

describe("TextOutputter : With Null strategies", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should log nothing for empty text", () => {
    expect(() => runTextOutput(null, "")).toThrow();
  });
});

describe("TextOutputter : With Zero strategies", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should log nothing for empty text", () => {
    runTextOutput([], "");
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe("TextOutputter : With 1 strategy", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should log once nothing for empty text", () => {
    runTextOutput([new UpperCaseOutput()], "");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("");
  });
  it("should log once nothing for some text", () => {
    runTextOutput([new UpperCaseOutput()], "some text");
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("SOME TEXT");
  });
});

describe("TextOutputter : With default strategies", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should error 3 times nothing for null text", () => {
    runTextOutput(TextOutputter.DEFAULT_STRATEGIES, null);
    expect(console.error).toHaveBeenCalledTimes(3);
  });
  it("should log 3 times nothing for empty text", () => {
    runTextOutput(TextOutputter.DEFAULT_STRATEGIES, "");
    expect(console.log).toHaveBeenCalledTimes(3);
  });
  it("should log 3 times nothing for some text", () => {
    runTextOutput(TextOutputter.DEFAULT_STRATEGIES, "some text");
    expect(console.log).toHaveBeenCalledTimes(3);
  });
});
