import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "Swift"
  it(`should rename ${sampleFileName}.swift to ${pascalCaseFileName}.swift`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.swift` })).toEqual(
      `${pascalCaseFileName}.swift`
    );
  });
});
