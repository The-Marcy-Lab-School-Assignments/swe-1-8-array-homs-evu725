// find
const getUserById = (users, id) => {
  return users.find((user) => user.id === id);
};

// findIndex
const getIndexOfApple = (foods) => {
  return foods.findIndex((food) => food.name === 'apple');
};

// reduce
const getSquaredTotal = (numbers) => {
  return numbers.reduce((acc, num) => acc + num * num, 0);
};

// every
const hasOnlyEvenNumbers = (arr) => {
  if (arr.length === 0) return false;
  return arr.every(num => num % 2 === 0);
};

// some
const anyGreaterThan10 = (arr) => {
  return arr.some((num) => num > 10);
};

// Use your judgement to decide which array method to use!
const roundAll = (arr) => {
  return arr.map((num) => Math.round(num));
};

const onlyStrings = (arr) => {
  return arr.filter((s) => typeof s === 'string');
};

const stringsToLength = (arr) => {
  return arr.map((str) => str.length);
};

const totalGreaterThanGiven = (arr, num) => {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum > num;
};

const numberOfLongWords = (arr) => {
  const length = arr.map((str) => (str.length > 4 ? 1 : 0));
  return length.reduce((sum, num) => sum + num, 0);
};

const numberOfCharacters = (arr) => {
  const counts = [...arr].reduce((acc, char) => (
    acc[char] = (acc[char] || 0) + 1, acc
  ), {});
  return counts;
};

const removeJerkFromCompany = (arr) => {
  const keep = arr.filter((s) => s.personality !== 'jerk');
  arr.length = 0;
  arr.push(...keep);
};

const chosenCoordinates = (arr, target) => {
  return arr.find(([x, y]) => x + y === target);
};

// Sorting Functions
const sortWords = (names) => {
  const namesCopy = [...names];
  namesCopy.sort();
  return namesCopy;
};

const sortNumbers = (numbers) => {
  const numbersCopy = [...numbers];
  numbersCopy.sort((a, b) => a - b);
  return numbersCopy;
};

const sortNumbersBetter = (numbers, descending) => {
  const numbersCopy = [...numbers];
  numbersCopy.sort((a, b) => a - b)
  if (descending) {
    numbersCopy.reverse();
  };
  return numbersCopy;
};

const sortUsersByOrder = (users) => {
  const usersCopy = [...users];
  return usersCopy.sort((a, b) => a.order - b.order);
};

const sortUsersByName = (users) => {
  return [...users].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
