export const isIntegerMoreThanZero = (text: string) => {
  const num = parseInt(text);

  return Number.isInteger(num) && num > 0;
};

export const getMultiples = (value: string) => {
  let valueInt = parseInt(value) - 1;

  const result = [];

  while (valueInt > 0) {
    if (valueInt % 3 === 0 || valueInt % 5 === 0) {
      result.unshift(valueInt);
    }

    valueInt--;
  }

  return result;
};

export const calculateSumOfMultiples = (multiplesArr: number[]) => {
  return multiplesArr.reduce((acc, multiple) => acc + multiple, 0);
};
