export const convertStringNumberToNumber = (value: string) => {
  if (typeof value === 'string' && value && !isNaN(Number(value))) {
    return parseFloat(value);
  }

  return value;
};
