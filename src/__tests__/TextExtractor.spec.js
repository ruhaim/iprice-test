import { TextExtractor } from "../TextExtractor.js";

function getArgText() {
  return TextExtractor.extractCliArg();
}
describe("TextExtractor", () => {
  it("should throw error if No arguments are sent", () => {
    process.argv = ["", ""]
    expect(() => getArgText()).toThrow();
  });
  it("should return arg when one argument is passed", () => {
    process.argv = ["", "", "test"]
    const output = getArgText();
    expect(output).toEqual("test");
  });
  it("should return combined args if multiple args are passed", () => {
    process.argv = ["", "", "test-arg1", "test-arg2"]
    const output = getArgText();
    expect(output).toEqual("test-arg1 test-arg2");
  });
});
