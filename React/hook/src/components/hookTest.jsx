import React, { useRef } from "react";
import useInput from "../hook/useInput";
import useTab from "../hook/useTab";
import useTitle from "../hook/useTitle";
import useClick from "../hook/useClick";

const HookTest = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("taesik", maxLen);
  const title = useTitle("loading...");

  setTimeout(() => title("hallo"), 2000);

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

  const yo = useRef();
  const sayHello = () => console.log("hello ?");
  const text = useClick(sayHello);
  return (
    <div>
      <h3>hook test</h3>
      <input type="text" placeholder="hey ?" {...name} />
      <br />
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{curruntItem.content}</div>
      <input type="text" placeholder="yo" ref={yo} />
      <h1 ref={text}>클릭 이벤트</h1>
    </div>
  );
};

export default HookTest;
