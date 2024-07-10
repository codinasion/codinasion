import { DotCaseStringToLowerCaseString as DotCaseStringToLowerCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function DotCaseStringToLowerCaseStringComponent(
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
            DotCaseStringToLowerCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Dot Case String",
        },
      ]}
      output={{
        label: "Lower Case String",
      }}
    />
  );
}
