import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "C#"
  it(`should rename ${sampleFileName}.cs to ${pascalCaseFileName}.cs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.cs` })).toEqual(
      `${pascalCaseFileName}.cs`
    );
  });
});
