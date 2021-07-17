const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const multiply = function (first, second) {
  return first * second;
};

const divide = function (first, second) {
  return first / second;
};

const showResult = function (result) {
  document.getElementById("result").innerHTML = "[" + result + "]";
};

const multiplyButton = document.getElementById("multiply");
const devideButton = document.getElementById("devide");

const inputOne = document.getElementById("one");
const inputTwo = document.getElementById("two");

multiplyButton.onclick = function () {
  const result = multiply(inputOne.value, inputTwo.value);
  showResult(result);
};

devideButton.onclick = function () {
  const result = divide(inputOne.value, inputTwo.value);
  showResult(result);
};
