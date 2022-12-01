import React from 'react';

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return
  }
  const fireNotif = () => { }
  return fireNotif
};

export default useNotification;