import { useState } from "react";
import { useResolvedPath } from "react-router-dom";

const defaultConfig = {
  defaultData: null,
  defaultIsProcessing: false,
};

export function useRequest(
  apiCallback,
  { defaultData, defaultIsProcessing } = defaultConfig
) {
  const [data, setData] = useState(defaultData);
  const [isProcessing, setIsProcessing] = useState(defaultIsProcessing);
  const [error, setError] = useState(null);
  const { pathname } = useResolvedPath();

  function invoke(...params) {
    setIsProcessing(true);

    apiCallback(...params)
      .then((res) => setData(res))
      .catch(({ status, response }) =>
        setError({ status, message: response.data.msg, path: pathname })
      )
      .finally(() => setIsProcessing(false));
  }

  return {
    data,
    isProcessing,
    error,
    invoke,
  };
}
