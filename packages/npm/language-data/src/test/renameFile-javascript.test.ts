import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "JavaScript"
  it(`should rename ${sampleFileName}.js to ${pascalCaseFileName}.js`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.js` })).toEqual(
      `${pascalCaseFileName}.js`
    );
  });
});
