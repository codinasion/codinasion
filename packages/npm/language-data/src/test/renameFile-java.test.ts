import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "Java"
  it(`should rename ${sampleFileName}.java to ${pascalCaseFileName}.java`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.java` })).toEqual(
      `${pascalCaseFileName}.java`
    );
  });
});
