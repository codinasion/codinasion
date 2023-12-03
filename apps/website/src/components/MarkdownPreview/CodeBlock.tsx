import * as React from "react";

import { GetLanguageData } from "@codinasion/language-data";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  slug: string;
  [key: string]: any;
};

export default function CodeBlock({ children }: Props) {
  const [blocks, setBlocks] = React.useState<any>([]);
  const [tabs, setTabs] = React.useState<any>([]);
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const makeblock = () => {
    children.map(async (child: any) => {
      if (child.type === "pre") {
        const className = child.props.children.props.className;

        const language = className.split("-")[1];

        const tag = language;

        setBlocks((prevBlocks: []) => [...prevBlocks, child]);
        setTabs((prevTabs: []) => [...prevTabs, tag]);
      }
    });
  };

  React.useEffect(() => {
    makeblock();

    return () => makeblock();
  }, []);

  return (
    <div className="pt-2 px-2 rounded-lg card_bg">
      <div>
        {tabs.map((tab: any, index: number) => {
          return (
            <button
              key={index}
              onClick={(e) => handleChange(e, index)}
              className={`btn text-sm font-bold mx-1 mb-1 py-1 px-2 rounded-md ${
                value === index
                  ? "bg-[#10b981] dark:bg-[#10b981] cursor-default"
                  : "bg-[#6ee7b7] dark:bg-[#047857] cursor-pointer"
              }`}
              disabled={value === index}
            >
              {
                // @ts-expect-error - object is possibly undefined
                GetLanguageData({
                  prismTag: tab,
                })[0].name
              }
            </button>
          );
        })}
      </div>
      <div>
        <div>{blocks[value]}</div>
      </div>
    </div>
  );
}
