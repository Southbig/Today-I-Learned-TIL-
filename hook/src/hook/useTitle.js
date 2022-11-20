import React, { useState, useEffect } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const getTitle = () => {
    const selectTitle = document.querySelector('title')
    selectTitle.innerHTML = title
  }
  useEffect(getTitle, [title])
  return setTitle
};

export default useTitle;