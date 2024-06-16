import { Base64ToString as Base64ToStringFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function Base64ToStringComponent(props: ToolPropsType): JSX.Element {
  const { input1Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Convert to normal string",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            Base64ToStringFn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Base64 String",
        },
      ]}
      output={{
        label: "Normal String",
      }}
    />
  );
}
