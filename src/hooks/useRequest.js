import { useState } from "react";
import { useResolvedPath } from "react-router-dom";

export function useRequest(apiCallback, { defaultData, defaultIsProcessing }) {
  const [data, setData] = useState(defaultData ?? null);
  const [isProcessing, setIsProcessing] = useState(
    defaultIsProcessing ?? false
  );
  const [error, setError] = useState(null);
  const { pathname } = useResolvedPath();

  function invoke(params) {
    setIsProcessing(true);

    apiCallback(params)
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
