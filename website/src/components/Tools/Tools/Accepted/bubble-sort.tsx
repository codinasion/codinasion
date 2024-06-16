import { BubbleSort as BubbleSortFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function BubbleSortComponent(props: ToolPropsType): JSX.Element {
  const { input1Value, setOutputValue } = props;
  return (
    <ToolComponent
      {...props}
      action={{
        label: "Sort",
        onClick: (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          const numbers: number[] = (input1Value as string)
            .split(",")
            .map((x: string): number => Number(x))
            .filter((x: number): boolean => !isNaN(x));
          // eslint-disable-next-line no-unused-vars
          (setOutputValue as (value: unknown) => void)(
            numbers.length > 0 ? BubbleSortFn(numbers) : undefined,
          );
        },
      }}
      inputs={[
        {
          label: "Unsorted Array",
        },
      ]}
      output={{
        label: "Sorted Array",
      }}
    />
  );
}
