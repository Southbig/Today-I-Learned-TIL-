import React from "react";
import useInput from "../hook/useInput";

const HookTest = () => {
  const maxLen = (value) => value.length <= 10;
  console.log("maxLen", maxLen);
  const name = useInput("taesik", maxLen);
  return (
    <div>
      <h3>hook test</h3>
      <input type="text" placeholder="hey ?" {...name} />
    </div>
  );
};

export default HookTest;
