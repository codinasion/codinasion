import type { ChangeEventHandler } from "react";
import CopyBlock from "@/components/CopyBlock";
import type { ToolPropsType } from "@/types";

export default function ToolComponent({
  input1Value,
  input2Value,
  input3Value,
  outputValue,
  handleChange1,
  handleChange2,
  handleChange3,
  inputs,
  action,
  output,
}: ToolPropsType): JSX.Element {
  const handleChangeFunctions = [
    handleChange1 as ChangeEventHandler<HTMLInputElement>,
    handleChange2 as ChangeEventHandler<HTMLInputElement>,
    handleChange3 as ChangeEventHandler<HTMLInputElement>,
  ];

  const inputValues = [input1Value, input2Value, input3Value];

  return (
    <form className="mt-8 mb-2">
      <div className="mb-4 flex flex-col gap-6">
        {inputs.map((input, index) => {
          return (
            <input
              key={input.label}
              type="text"
              placeholder={input.label}
              onChange={handleChangeFunctions[index]}
              required
              className="input input-bordered w-full"
              value={inputValues[index] as string}
            />
          );
        })}
      </div>

      <button
        className="btn btn-primary my-6 w-full"
        onClick={action.onClick}
        type="submit"
        disabled={inputValues.slice(0, inputs.length).some((input) => !input)}
      >
        {action.label}
      </button>

      <CopyBlock
        text={outputValue ? (outputValue as string) : output.label}
        language="text"
        showLineNumbers={false}
      />
    </form>
  );
}
