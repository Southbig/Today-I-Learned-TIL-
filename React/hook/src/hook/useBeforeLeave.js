import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== 'function') {
    return
  }
  const handleCursor = (event) => {
    // console.log('useBeforeLeave 작동 !', event)
    // onBefore()
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore()
    }
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handleCursor)
    return () => {
      document.removeEventListener('mouseleave', handleCursor)
    }
  }, [])
};

export default useBeforeLeave;