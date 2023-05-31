import renameFile from "../renameFile";

const sampleFileName = "sample-file-name";
const pascalCaseFileName = "SampleFileName";

describe("Rename File", () => {
  // Test case for "TypeScript"
  it(`should rename ${sampleFileName}.ts to ${pascalCaseFileName}.ts`, () => {
    expect(renameFile({ fileName: `${sampleFileName}.ts` })).toEqual(
      `${pascalCaseFileName}.ts`
    );
  });
});
