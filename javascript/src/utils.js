const isIntegerMoreThanZero = (text) => {
  const num = parseInt(text);

  return Number.isInteger(num) && num > 0;
};

module.exports = { isIntegerMoreThanZero };
