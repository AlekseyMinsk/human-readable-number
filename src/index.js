module.exports = function toReadable (number) {
  number = number.toString().split("");
  var answer = [];
  var digits = {
  	0: "zero",
  	1: "one",
  	2: "two",
  	3: "three",
  	4: "four",
  	5: "five",
  	6: "six",
  	7: "seven",
  	8: "eight",
  	9: "nine"
  }

  var decimals = {
  	10: "ten",
  	11: "eleven",
  	12: "twelve",
  	13: "thirteen",
  	14: "fourteen",
  	15: "fifteen",
  	16: "sixteen",
  	17: "seventeen",
  	18: "eighteen",
  	19: "nineteen",
  	20: "twenty",
  	30: "thirty",
  	40: "forty",
  	50: "fifty",
  	60: "sixty",
  	70: "seventy",
  	80: "eighty",
  	90: "ninety"
  }

  if(number.length > 2) {
  	answer.push( digits[number[0]] + " " + "hundred");
  } 
  if(number.length > 1) {
  	if(number[number.length - 2] === "1") {
  		answer.push(decimals["1" + number[number.length - 1]]);
  		return answer.join(" ");
  	} else if(number[number.length - 2] !== "0") {
  		answer.push(decimals[number[number.length - 2] + "0"]);
  	}
  }
  if(number[number.length - 1] !== "0" ||  number.length === 1) {
  	answer.push(digits[number[number.length - 1]]);
  }
  
  return answer.join(" ");
  
}
