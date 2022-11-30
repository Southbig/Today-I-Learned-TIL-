import React, { useState, useEffect } from 'react';

const useScroll = () => {
  const [state, setState] = useState('')

  const onScroll = () => {
    console.log(window.scrollY)
    setState({ y: window.scrollY, x: window.scrollX })
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
  return state
};

export default useScroll;