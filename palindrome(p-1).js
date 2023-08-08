const palindrom = (num) => {
  const numToStr = num.toString();
  const splitStrNum = numToStr.split("").reverse().join("");
  const revNum = Number(splitStrNum);
  if (num === revNum) return true;
  return false;
};

console.log(palindrom(121));
console.log(palindrom(-121));
console.log(palindrom(10));
