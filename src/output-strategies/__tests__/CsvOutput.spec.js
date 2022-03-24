import { jest } from "@jest/globals";
import { CsvOutput } from "../CsvOutput.js";
import fs from "fs";

jest.spyOn(fs, "writeFileSync").mockImplementation();

function getOutput(textText) {
  return new CsvOutput("./test.csv").output(textText);
}
describe("CsvOutput", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should throw error for undefined text", () => {
    expect(() => getOutput()).toThrow();
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
  it("should throw error for null text", () => {
    expect(() => getOutput(null)).toThrow();
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
  it("should return valid value for empty text", () => {
    const output = getOutput("");
    expect(output).toEqual("CSV created!");
    expect(fs.writeFileSync).toHaveBeenCalledWith("./test.csv", "");
  });
  it("should return valid value for all uppercase text", () => {
    const output = getOutput("ABCDEFG HIJKL MNOPQRSTU VWXYZ");
    expect(output).toEqual("CSV created!");
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./test.csv",
      "A,B,C,D,E,F,G, ,H,I,J,K,L, ,M,N,O,P,Q,R,S,T,U, ,V,W,X,Y,Z"
    );
  });
  it("should return valid value for all lowercase text", () => {
    const output = getOutput("qqwer tyuiopas dfghjklzxcvbnm");
    expect(output).toEqual("CSV created!");
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./test.csv",
      "q,q,w,e,r, ,t,y,u,i,o,p,a,s, ,d,f,g,h,j,k,l,z,x,c,v,b,n,m"
    );
  });
  it("should return valid value for mixed case text", () => {
    const output = getOutput("abCdEf GhIjkLMnOPqR stuVWxyz");
    expect(output).toEqual("CSV created!");
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "./test.csv",
      "a,b,C,d,E,f, ,G,h,I,j,k,L,M,n,O,P,q,R, ,s,t,u,V,W,x,y,z"
    );
  });
});
