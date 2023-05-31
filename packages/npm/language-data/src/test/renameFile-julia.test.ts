import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const snakeCaseFileName = "sample_file_name";

describe("Rename File", () => {
  // Test case for "Julia"
  it(`should rename ${sampleFileName}.jl to ${snakeCaseFileName}.jl`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.jl` })).toEqual(
      `${snakeCaseFileName}.jl`
    );
  });
});
