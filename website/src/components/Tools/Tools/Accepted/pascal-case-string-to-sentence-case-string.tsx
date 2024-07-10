import { PascalCaseStringToSentenceCaseString as PascalCaseStringToSentenceCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function PascalCaseStringToSentenceCaseStringComponent(
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
            PascalCaseStringToSentenceCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "PascalCase String",
        },
      ]}
      output={{
        label: "SentenceCase String",
      }}
    />
  );
}
