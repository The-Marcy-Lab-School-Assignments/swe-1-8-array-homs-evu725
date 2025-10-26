const filterVipUsers = (users, vipUserIdsSet) => {
  return users.filter(user => [...vipUserIdsSet].includes(user.id));
};

const multiplicativeAverage = (nums) => {
  const product = nums.reduce((acc, val) => acc * val, 1)
  return product / nums.length;
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};
