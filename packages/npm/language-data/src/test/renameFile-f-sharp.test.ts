import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "F#"
  it(`should rename ${sampleFileName}.fs to ${pascalCaseFileName}.fs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.fs` })).toEqual(
      `${pascalCaseFileName}.fs`
    );
  });
});
