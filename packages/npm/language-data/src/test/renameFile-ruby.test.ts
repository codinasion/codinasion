import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "Ruby"
  it(`should rename ${sampleFileName}.rb to ${pascalCaseFileName}.rb`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.rb` })).toEqual(
      `${pascalCaseFileName}.rb`
    );
  });
});
