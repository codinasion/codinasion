import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "C++"
  it(`should rename ${sampleFileName}.cpp to ${pascalCaseFileName}.cpp`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.cpp` })).toEqual(
      `${pascalCaseFileName}.cpp`
    );
  });
});
