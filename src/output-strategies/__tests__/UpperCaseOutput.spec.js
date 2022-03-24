import { UpperCaseOutput } from "../UpperCaseOutput.js";

function getOutput(textText) {
  return new UpperCaseOutput().output(textText);
}
describe("AlternatingCaseOutput", () => {
  it("should throw error for undefined text", () => {
    expect(() => getOutput()).toThrow();
  });
  it("should throw error for null text", () => {
    expect(() => getOutput(null)).toThrow();
  });
  it("should return empty for empty text", () => {
    const output = getOutput("");
    expect(output).toEqual("");
  });
  it("should return valid value for all uppercase text", () => {
    const output = getOutput("ABCDEFG HIJKL MNOPQRSTU VWXYZ");
    expect(output).toEqual("ABCDEFG HIJKL MNOPQRSTU VWXYZ");
  });
  it("should return valid value for all lowercase text", () => {
    const output = getOutput("qqwer tyuiopas dfghjklzxcvbnm");
    expect(output).toEqual("QQWER TYUIOPAS DFGHJKLZXCVBNM");
  });
  it("should return valid value for mixed case text", () => {
    const output = getOutput("abCdEf GhIjkLMnOPqR stuVWxyz");
    expect(output).toEqual("ABCDEF GHIJKLMNOPQR STUVWXYZ");
  });
});
