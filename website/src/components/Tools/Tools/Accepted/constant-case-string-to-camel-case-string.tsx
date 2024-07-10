import { ConstantCaseStringToCamelCaseString as ConstantCaseStringToCamelCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function ConstantCaseStringToCamelCaseStringComponent(
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
            ConstantCaseStringToCamelCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Constant case string",
        },
      ]}
      output={{
        label: "Camel case string",
      }}
    />
  );
}
