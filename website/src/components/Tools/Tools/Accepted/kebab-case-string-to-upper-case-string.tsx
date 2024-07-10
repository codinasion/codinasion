import { KebabCaseStringToUpperCaseString as KebabCaseStringToUpperCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function KebabCaseStringToUpperCaseStringComponent(
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
            KebabCaseStringToUpperCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Kebab case string",
        },
      ]}
      output={{
        label: "Upper case string",
      }}
    />
  );
}
