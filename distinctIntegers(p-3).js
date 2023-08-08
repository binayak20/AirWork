const nums = [1, 13, 10, 12, 31];
//[12,10, 31, 21];
//const nums = [2, 2, 2];
const distinctIntegers = (nums) => {
  const revNums = [];
  for (const element of nums) {
    const numToStr = element.toString();
    const splitStrNum = numToStr.split("").reverse().join("");
    const revNum = Number(splitStrNum);
    revNums.push(revNum);
  }
  const totalNums = new Set([...nums, ...revNums]);
  return totalNums.size;
};
console.log(distinctIntegers(nums));
