import { LinearSearch as LinearSearchFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function LinearSearchComponent(props: ToolPropsType): JSX.Element {
  const { input1Value, input2Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Search",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          const numbers: number[] = (input1Value as string)
            .split(",")
            .map((x: string): number => Number(x))
            .filter((x: number): boolean => !isNaN(x));
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            numbers.length > 0
              ? LinearSearchFn(numbers, Number(input2Value))
              : undefined,
          );
        },
      }}
      inputs={[
        {
          label: "Search in",
        },
        {
          label: "Search for",
        },
      ]}
      output={{
        label: "Index",
      }}
    />
  );
}
