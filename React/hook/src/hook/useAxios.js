import React, { useState, useEffect } from 'react';
import axios from 'axios'

const useAxios = (option, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  })
  const [trigger, setTrigger] = useState(0)
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }
  if (!option.url) {
    return
  }
  useEffect(() => {
    axiosInstance(option).then(data => {
      setState({
        ...state,
        loading: false,
        data
      })
    }).catch(error => {
      setState({ ...state, loading: false, error })
    })
  }, [trigger])
  return { ...state, refetch }
  // return state
};

export default useAxios;