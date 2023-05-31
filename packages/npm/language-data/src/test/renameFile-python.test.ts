import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "Python"
  it(`should rename ${sampleFileName}.py to ${snakeCaseFileName}.py`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.py` })).toEqual(
      `${snakeCaseFileName}.py`
    );
  });
});
