import * as React from "react";

import { getLanguageData } from "@codinasion/language-data";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  slug: string;
  [key: string]: any;
};

export default function CodeBlock({
  children,
  className,
  slug,
  ...props
}: Props) {
  const [blocks, setBlocks] = React.useState<any>([]);
  const [tabs, setTabs] = React.useState<any>([]);
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const makeblock = () => {
    children.map(async (child: any) => {
      if (child.type === "pre") {
        const className = child.props.children[0].props.className;

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                  ? "bg-emerald-500 dark:bg-emerald-400"
                  : "bg-emerald-300 dark:bg-emerald-500"
              }`}
              disabled={value === index}
            >
              {
                getLanguageData({
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
