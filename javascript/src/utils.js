const isIntegerMoreThanZero = (text) => {
  const num = parseInt(text);

  return Number.isInteger(num) && num > 0;
};

const getMultiples = (value) => {
  value = parseInt(value) - 1;

  const result = [];

  while (value > 0) {
    if (value % 3 === 0 || value % 5 === 0) {
      result.unshift(value);
    }

    value--;
  }

  return result;
};

const calculateSumOfMultiples = (multiplesArr) => {
  return multiplesArr.reduce((acc, multiple) => acc + multiple, 0);
};

module.exports = {
  isIntegerMoreThanZero,
  getMultiples,
  calculateSumOfMultiples,
};
