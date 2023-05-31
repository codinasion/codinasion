import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "Dart"
  it(`should rename ${sampleFileName}.dart to ${pascalCaseFileName}.dart`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.dart` })).toEqual(
      `${pascalCaseFileName}.dart`
    );
  });
});
