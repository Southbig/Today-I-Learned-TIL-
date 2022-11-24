import React, { useState } from "react";

const useTab = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [curruntIndex, setCurrntIndex] = useState(initialTab);
  return {
    curruntItem: allTabs[curruntIndex],
    changeItem: setCurrntIndex,
  };
};

export default useTab;
