import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "C"
  it(`should rename ${sampleFileName}.c to ${pascalCaseFileName}.c`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.c` })).toEqual(
      `${pascalCaseFileName}.c`
    );
  });
});
