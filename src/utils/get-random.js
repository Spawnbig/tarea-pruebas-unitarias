/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {Number} min - Min number
 * @param {Number} max - Max number
 * @returns {Number} Random number integer
 */
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getListOfUniqueRandomNumbers = ({ min, max, qty }) => {
  // Codigo agregado
  if (max - min < qty) {
    throw new Error("It's impossible to get the required quantity of unique random numbers.");
  }
  const randomNumber = [];
  for (let i = 0; i < qty; ) {
    const random = getRandomNumber(min, max);
    if (!randomNumber.includes(random)) {
      randomNumber.push(random);
      i++;
    }
  }
  return randomNumber;
};

module.exports = { getRandomNumber, getListOfUniqueRandomNumbers };
