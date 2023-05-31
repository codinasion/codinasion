import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "Perl"
  it(`should rename ${sampleFileName}.pl to ${snakeCaseFileName}.pl`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.pl` })).toEqual(
      `${snakeCaseFileName}.pl`
    );
  });
});
