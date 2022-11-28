import React, { useEffect } from 'react';

const useBeforeLeave = () => {
  const handleCursor = () => {
    console.log('useBeforeLeave 작동 !')
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle)
    return () => {
      document.removeEventListener('mouseleave', handle)
    }
  }, [])
  return (
    <div>

    </div>
  );
};

export default useBeforeLeave;