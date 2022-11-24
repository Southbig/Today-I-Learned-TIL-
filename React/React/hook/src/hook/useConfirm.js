import React from 'react';

const useConfirm = (message, callback, rejection) => {
  if (!callback || typeof callback !== 'function') {
    return
  }
  if (rejection && typeof rejection !== 'function') {
    return
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback()
    } else {
      rejection()
    }
  }
  return confirmAction
};

export default useConfirm;