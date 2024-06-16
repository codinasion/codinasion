import { HeaderCaseStringToUpperCaseString as HeaderCaseStringToUpperCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function HeaderCaseStringToUpperCaseStringComponent(
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
            HeaderCaseStringToUpperCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Header Case String",
        },
      ]}
      output={{
        label: "Upper Case String",
      }}
    />
  );
}
