export const normalizeDate = (dateString, options) => {
  const defaultOptions = {
    dateStyle: "long",
    ...options,
  };
  return new Date(dateString).toLocaleString("en-GB", defaultOptions);
};
