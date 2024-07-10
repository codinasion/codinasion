import { ConstantCaseStringToSentenceCaseString as ConstantCaseStringToSentenceCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function ConstantCaseStringToSentenceCaseStringComponent(
  props: ToolPropsType,
): JSX.Element {
  const { input1Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Convert",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            ConstantCaseStringToSentenceCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Constant case string",
        },
      ]}
      output={{
        label: "Sentence case string",
      }}
    />
  );
}
