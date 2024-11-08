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

  function invoke({
    withArgs = [],
    onSuccess = (res) => res,
    onError = (res) => res,
  }) {
    setIsProcessing(true);

    return apiCallback(...withArgs)
      .then(onSuccess)
      .then((res) => setData(res))
      .catch((err) => {
        const { status, response } = err;

        onError(err);
        setError({ status, message: response.data.msg, path: pathname });
      })
      .finally(() => setIsProcessing(false));
  }

  return {
    data,
    setData,
    isProcessing,
    error,
    invoke,
  };
}
