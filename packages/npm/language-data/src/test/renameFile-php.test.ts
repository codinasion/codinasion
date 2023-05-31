import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "PHP"
  it(`should rename ${sampleFileName}.php to ${snakeCaseFileName}.php`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.php` })).toEqual(
      `${snakeCaseFileName}.php`
    );
  });
});
