import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const camelCaseFileName = "sampleFileName";

describe("Rename File", () => {
  // Test case for "Scala"
  it(`should rename ${sampleFileName}.scala to ${camelCaseFileName}.scala`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.scala` })).toEqual(
      `${camelCaseFileName}.scala`
    );
  });
});
