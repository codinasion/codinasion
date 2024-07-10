import { HeaderCaseStringToSnakeCaseString as HeaderCaseStringToSnakeCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function HeaderCaseStringToSnakeCaseStringComponent(
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
            HeaderCaseStringToSnakeCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Header Case String",
        },
      ]}
      output={{
        label: "Snake Case String",
      }}
    />
  );
}
