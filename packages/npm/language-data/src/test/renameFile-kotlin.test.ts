import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "Kotlin"
  it(`should rename ${sampleFileName}.kt to ${pascalCaseFileName}.kt`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.kt` })).toEqual(
      `${pascalCaseFileName}.kt`
    );
  });
});
