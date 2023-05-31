import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "Rust"
  it(`should rename ${sampleFileName}.rs to ${snakeCaseFileName}.rs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.rs` })).toEqual(
      `${snakeCaseFileName}.rs`
    );
  });
});
