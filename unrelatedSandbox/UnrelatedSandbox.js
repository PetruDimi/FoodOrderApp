// function mostLikely(prob1, prob2) {
//   const split1 = prob1.split(":");
//   const split2 = prob2.split(":");

//   const probNum1 = +split1[0] / +split1[1];
//   const probNum2 = +split2[0] / +split2[1];

//   return probNum1 < probNum2 ? false : true;
// }

// console.log(mostLikely("10:11", "1:2"));

// var numberFormat = function (number) {
//   return number.toLocaleString()
// };

// console.log(numberFormat(1234.56));

// var numberToPrice = function (number) {
//   if (number == undefined) {
//     return "1,000,000.50";
//   }
//   if (Number.isInteger(number)) {
//     return number.toLocaleString()+'.00'
//   }
//   if (Number.isInteger(number * 10)) {
//     return number.toLocaleString()+0
//   }
//   const round = Math.trunc(number * 1000) / 1000;

//   return typeof number === "number" ? result.toLocaleString() : "NaN";
// };

var numberToPrice = function (number) {
  if (number == undefined) {
    return "1,000,000.50";
  }
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "eur",
  });
  return currency.format(number);
};
console.log(numberToPrice(1234567.999));

// const mirror = (obj) => {
//   const keys = Object.keys(obj);
//   const reduce = keys.reduce((acc, curr) => {
//     acc[curr] = curr.split("").reverse().join("");
//     return acc;
//   }, {});
//   return reduce;
// };

// console.log(mirror({ abc: "", arara: "", xyz: "", foobar: "" }));

// function translate(sentence) {
//   const regexTest = /^[A-Za-z\s]*$/.test(sentence);
//   console.log(regexTest);
//   if (regexTest === false) {
//     return null;
//   }

//   const splitSentece = sentence.split(' ')
//   console.log(splitSentece);

//   const pigLatinifyWord = (string) =>{
//     const vowelArr = ["a", "e", "i", "o", "u"];
//     let pigLatCons = [];
//     const splitString = string.toLowerCase().split("");

//     if (vowelArr.includes(splitString[0])) {
//       return splitString.join("") + "way";
//     } else {
//       for (let i = 0; i < splitString.length; i++) {
//         if (!vowelArr.includes(splitString[i])) {
//           pigLatCons.push(splitString[i]);
//         } else {
//           break;
//         }
//       }
//     }
//     const slicePigLat = splitString.slice(pigLatCons.length);

//     return slicePigLat.join("") + pigLatCons.join("") + "ay";
//   }

//   const pigLatArray = splitSentece.map(element => {
//     return pigLatinifyWord(element)
//   })
//     console.log(pigLatArray);
//     // const upperCase = pigLatArray.map
// };

// console.log(translate("This is pig latin"));

// function expandedForm(num) {
//   const splitNum = num.toString().split("");
//   let newArrNum = [];
//   splitNum.reverse().forEach((x, index) => {
//     newArrNum.push(x * 10 ** index);
//   });
//   const noZeroArrReverse = newArrNum.reverse().filter((x) => {
//     return x !== 0;
//   });
//   return noZeroArrReverse.join(" + ");
// }

// console.log(expandedForm(7456));

// class Converter {
//   constructor (sizeAmount, someUnit){
//     this.sizeAmount = sizeAmount
//     this.someUnit = someUnit
//   }

//   unit(){
//     return this.someUnit
//   }
//   size(){
//     return `${this.sizeAmount} ${this.someUnit}`
//   }
// }

// const q = new Converter (35, 'MB')
// console.log(q.unit());
// console.log(q.size());

// function span(arr, predicate) {
//   const mapArr = arr.map((x) => {
//     return predicate(x) === true;
//   });
//   console.log(mapArr);
//   const firstOccurence = mapArr.indexOf(false);

//   const firstSequence = arr.slice(0, firstOccurence);
//   const secondSequence = arr.slice(firstOccurence);
//   if(!mapArr.includes(false)){
//     return [arr, []]
//   }
//   return [firstSequence, secondSequence];
// }

// function isEven(x) {
//   return Math.abs(x) % 2 === 0;
// }

// const thisArr = [2, 4, 6, 8, 10];

// console.log(span(thisArr, isEven));

const mathComb = (n, k) => {
  const factorialize = (num) => {
    if (num > 0) {
      return num * factorialize(num - 1);
    } else if (num <= 0) {
      return 1;
    }
  };
  if (k > n) {
    return 0;
  } else return factorialize(n) / (factorialize(k) * factorialize(n - k));
};
console.log(mathComb(4, 1));

const coeff = (n) => {
  let coeffArr = [];
  for (let i = 0; i <= n; i++) {
    coeffArr.push(mathComb(n, n - i));
  }
  return coeffArr;
};

console.log(coeff(6));

// function fibonacci(n, memo) {
//   memo = memo || {};
//   if (memo[n]) return memo[n];
//   if (n <= 1) return n;
//   return (memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
// }

// console.log(fibonacci(1000));
// const test = BigInt(fibonacci(99))
// console.log(test);

// const zero = c => c ? c(0) : 0;
// const one = c => c ? c(1) : 1;
// const two = c => c ? c(2) : 2;
// const three = c => c ? c(3) : 3;
// const four = c => c ? c(4) : 4;
// const five = c => c ? c(5) : 5;
// const six = c => c ? c(6) : 6;
// const seven = c => c ? c(7) : 7;
// const eight = c => c ? c(8) : 8;
// const nine = c => c ? c(9) : 9;

// const plus = n => p => p + n;
// const minus = n => p => p - n;
// const times = n => p => p * n;
// const dividedBy = n => p => p / n;

// console.log(four(minus(three())));

// const newFactorialize = (num) =>{
//   if(num===0) return 1
//   let result = 1
//   for (let i = 1; i < num; i++) {
//     result += result * i
//     console.log(result);
//   }
//   return result
// }
// console.log(newFactorialize(4));

// function order(words){
//   const objectFromWords = words.split(' ').map((x, index)=>{
//     const wordsOrder = words.split('').filter(x=>+x)
//     return {[wordsOrder[index]]:x}
//   })
//   const sortedWordsObject = objectFromWords.sort((a,b)=> +Object.keys(a) > +Object.keys(b) ? 1 : -1)
//   const finalOrder = sortedWordsObject.map(x=>Object.values(x))
//   return finalOrder.join(' ')
// }

// console.log(order(""));

// function range(start, stop, step) {
//   if (arguments.length === 1) {
//     stop = +Object.values(arguments);
//     start = 0;
//   }
//   if (step === undefined) step = 1;
//   if (stop === 0) return [];
//   if (start >= stop) return [];
//   if (step === 0){
//     let zeroStepRangeArray = new Array(stop-start).fill(start)
//     return zeroStepRangeArray
//   }
//   let rangeArray = [];
//   for (let i = start; i < stop; i = i + step) {
//     rangeArray.push(i);
//   }
//   return rangeArray;
// }
// console.log(range(1, 4, 0));

// function permutations(string) {
//   if( typeof string === 'string'){
//     string = string.split('')
//   }
//   let result = [];
//   if (string.length === 0) return [];
//   if (string.length === 1) return string;
//   for (let i = 0; i < string.length; i++) {
//     const remainingVal = [...string]
//     const spliceVal = remainingVal.splice(i, 1)
//     const remainingPerm = permutations(remainingVal)
//     console.log(remainingPerm);
//     for (let j = 0; j < remainingPerm.length; j++) {
//       const permArray = spliceVal.concat(remainingPerm[j])
//       result.push(permArray)
//     }
//   }
//   const initialResult = result.map(x=>x.join(''))
//   const finalResult = [...new Set(initialResult)]
//   return finalResult
// }

// function permutations(string) {
// 	if ( typeof string === 'string'){
//     string = string.split('')
//   }
//   if(string.length === 0) return []
//   if(string. length === 1) return string

//   let initialResult = []

//   for (let i = 0; i < string.length; i++) {
//     const remainingVal = [...string]
//     const currentVal = remainingVal.splice(i, 1)
//     const remainingPerm = permutations(remainingVal)
//       for (let j = 0; j < remainingPerm.length; j++) {
//         const permArray = currentVal.concat(remainingPerm[j])
//         initialResult.push(permArray)
//       }
//   }
//   console.log(initialResult);
//   return [... new Set(initialResult.map(x=>x.join('')))]
// }

// console.log(permutations('abc'));

// function createTwoSetsOfEqualSum(n) {

//   let oneToN = []
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     oneToN.push(i)
//     sum += i
//   }
//   if (sum % 2 !== 0) return [[],[]]
//   console.log(oneToN);
//   console.log(sum);
// console.log(oneToN);
// }

// console.log(createTwoSetsOfEqualSum(7));

// const q = [1,2,3,4]
// const test = (array) =>{
//   let sum = []
//   for (let i = 1; i <= array.length; i++) {
//     for (let j = 1; j <= array.length; j++) {
//       if (i + j === 5){
//         sum.push(i, j)
//       }
//     }
//   }
//   console.log(sum);
// }
// console.log(test(q));

function validateBet(game, text) {
  const betNumbers = text.split("");
  const extractedNumbers = betNumbers.filter((x) => +x);

  console.log(betNumbers);
  console.log(extractedNumbers);

  if (betNumbers.length !== game[0]) {
    return null;
  }
  for (let i = 0; i < betNumbers.length; i++) {
    if (betNumbers[i] > game[1]) {
      return null;
    }
  }
}

const game = [5, 90];
const text = "5,  39, 1  4,2";

console.log(validateBet(game, text));
// /////////////////////////////////////////////////////

const fetchMeals = async () => {
  const response = await fetch(
    "https://foodorderapp-8b986-default-rtdb.firebaseio.com/meals.json"
  );
  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  let mealsArr = [];

  for (const key in data) {
    mealsArr.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      price: data[key].price,
    });
  }
  console.log(mealsArr);
};
fetchMeals();
