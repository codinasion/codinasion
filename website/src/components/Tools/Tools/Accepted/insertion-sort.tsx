import { InsertionSort as InsertionSortFn } from "codinasion";
import type { ToolPropsType } from "@/types";
import ToolComponent from "../../tool-component";

export function InsertionSortComponent(props: ToolPropsType): JSX.Element {
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
            numbers.length > 0 ? InsertionSortFn(numbers) : undefined,
          );
        },
      }}
      inputs={[
        {
          label: "Unsorted numbers",
        },
      ]}
      output={{
        label: "Sorted numbers",
      }}
    />
  );
}
