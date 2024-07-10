import { KebabCaseStringToDotCaseString as KebabCaseStringToDotCaseStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function KebabCaseStringToDotCaseStringComponent(
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
            KebabCaseStringToDotCaseStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Kebab case string",
        },
      ]}
      output={{
        label: "Dot case string",
      }}
    />
  );
}
