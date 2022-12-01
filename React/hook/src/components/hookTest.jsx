import React, { useRef } from "react";
import useInput from "../hook/useInput";
import useTab from "../hook/useTab";
import useTitle from "../hook/useTitle";
import useClick from "../hook/useClick";
import useConfirm from "../hook/useConfirm";
import usePreventLeave from "../hook/usePreventLeave";
import useBeforeLeave from "../hook/useBeforeLeave";
import useFadeIn from "../hook/useFadeIn";
import useNetwork from "../hook/useNetwork";
import useScroll from "../hook/useScroll";
import useFullscreen from "../hook/useFullscreen";
import triggerNotif from "../hook/useNotification";

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

  const fadeInH2 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(3, 3);

  const handleNetworkChange = (onLine) => {
    console.log(onLine ? "We just went online" : "We are offline");
  };

  const onLine = useNetwork(handleNetworkChange);

  const { y } = useScroll();

  const onFullMessage = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullMessage);

  const notification = useNotification();
  console.log(notification);
  return (
    <div style={{ height: "1000vh" }}>
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

      <h1 {...fadeInH2}>hallo</h1>
      <p {...fadeInP}>schen dich kennenzulernen</p>
      <h1>{onLine ? "jetzt online" : "jetzt offline"}</h1>

      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        useScroll
      </h1>

      <div style={{ margin: "150px" }}>
        <div>
          <img
            src="hallstadt.JPG"
            alt=""
            style={{ with: "200px", height: "200px" }}
            ref={element}
            onClick={exitFull}
          />
        </div>
        <button onClick={triggerFull}>full screen</button>
      </div>
    </div>
  );
};

export default HookTest;
