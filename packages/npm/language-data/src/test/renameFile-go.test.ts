import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "GO"
  it(`should rename ${sampleFileName}.go to ${snakeCaseFileName}.go`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.go` })).toEqual(
      `${snakeCaseFileName}.go`
    );
  });
});
