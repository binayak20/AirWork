const nums = [-1, 0, 1, 2, -1, -4];
//const nums = [0, 1, 1];
const arraySum = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result;
};

console.log(arraySum(nums));
