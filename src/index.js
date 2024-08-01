module.exports = function toReadable (number) {
  const arrayUnits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const arrayTeens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const arrayTens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const arrayHundreds = [
      "one hundred", "two hundred", "three hundred", "four hundred", 
      "five hundred", "six hundred", "seven hundred", "eight hundred", 
      "nine hundred"
  ];

  number = String(number);
  let answer = "";
  let len = number.length;

  for (let i = 0; i < number.length; i++) {
      if (i === 0) {
          if (len === 3 && number[i] !== "0") {
              answer += arrayHundreds[number[i] - 1] + " ";
              len--;
          } else if (len === 2 && number[i] !== "0") {
              if (number[i] === "1" && number[i + 1] !== "0") {
                  answer += arrayTeens[number[i + 1] - 1];
                  return answer.trim();
              } else {
                  answer += arrayTens[number[i] - 1] + " ";
                  len--;
              }
          } else if (len === 1) {
              answer += arrayUnits[number[i]];
              return answer.trim();
          }
      } else if (i === 1) {
          if (len === 2 && number[i] !== "0") {
              if (number[i] === "1" && number[i + 1] !== "0") {
                  answer += arrayTeens[number[i + 1] - 1];
                  return answer.trim();
              } else {
                  answer += arrayTens[number[i] - 1] + " ";
                  len--;
              }
          } else if (len === 1 && number[i] !== "0") {
              answer += arrayUnits[number[i]];
              return answer.trim();
          }
      } else if (i === 2) {
          if (number[i] !== "0") {
              answer += arrayUnits[number[i]];
          }
      }
  }

  return answer.trim();
}
