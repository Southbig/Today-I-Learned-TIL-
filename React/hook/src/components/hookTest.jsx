import React from "react";
import useInput from "../hook/useInput";
import useTab from "../hook/useTab";

const HookTest = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("taesik", maxLen);

  const content = [
    {
      tab: "Section 1",
      content: "hallo Section 1",
    },
    {
      tab: "Section 2",
      content: "hallo Section 2",
    },
  ];

  const { curruntItem, changeItem } = useTab(0, content);

  return (
    <div>
      <h3>hook test</h3>
      <input type="text" placeholder="hey ?" {...name} />
      <br />
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{curruntItem.content}</div>
    </div>
  );
};

export default HookTest;
