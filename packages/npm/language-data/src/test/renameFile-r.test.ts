import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "R"
  it(`should rename ${sampleFileName}.r to ${snakeCaseFileName}.r`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.r` })).toEqual(
      `${snakeCaseFileName}.r`
    );
  });
});
