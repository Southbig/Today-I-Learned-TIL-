import React, { useRef } from "react";
import useInput from "../hook/useInput";
import useTab from "../hook/useTab";
import useTitle from "../hook/useTitle";
import useClick from "../hook/useClick";
import useConfirm from "../hook/useConfirm";
import usePreventLeave from "../hook/usePreventLeave";
import useBeforeLeave from "../hook/useBeforeLeave";

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

  const action = () => console.log("du kannst das");
  const abord = () => console.log("du kannst nicht das");
  const confirm = useConfirm("kann ich das ?", action, abord);

  const { enablePrevent, disablePrevent } = usePreventLeave();
  const beForLife = () => console.log("Please don't leave");
  useBeforeLeave(beForLife);
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
      <button onClick={confirm}>Confirm button</button>
      <br />
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default HookTest;
