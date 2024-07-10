import { SnakeCaseStringToPascalCaseString as SnakeCaseStringToPascalCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function SnakeCaseStringToPascalCaseStringComponent(
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
            SnakeCaseStringToPascalCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "SnakeCase String",
        },
      ]}
      output={{
        label: "PascalCase String",
      }}
    />
  );
}
