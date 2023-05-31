import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "Haskell"
  it(`should rename ${sampleFileName}.hs to ${snakeCaseFileName}.hs`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.hs` })).toEqual(
      `${snakeCaseFileName}.hs`
    );
  });
});
