import { StringToBase64 as StringToBase64Fn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function StringToBase64Component(props: ToolPropsType): JSX.Element {
  const { input1Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Convert to base64 string",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            StringToBase64Fn(String(input1Value)),
          );
        },
      }}
      inputs={[
        {
          label: "Normal String",
        },
      ]}
      output={{
        label: "Base64 String",
      }}
    />
  );
}
