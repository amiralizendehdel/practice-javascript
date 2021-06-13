const pi = 3.14;
const var1 = "sdfsdfsdfsdfsdf";
const var2 = {}; // object
const var3 = []; // array

// examples

// ex1 array
// const myArray = ["sdf", "sssss"];
// console.log(myArray[1]);

// ex2 object
const myObject = { a: "aaaaa", b: { hamid: "Hamin mahmoodi" }, c: ["sdf", "sdfdf"] };
// console.log(myObject.b.hamid);
// console.log(myObject.c[1]);

// ex3 object
const calculator = {
  add: function (first, second) {
    return first + second;
  },

  subtract: function (one, two) {
    return one - two;
  },
};

const result = calculator.add(12, 4);
const result2 = calculator.subtract(12, 4);
console.log(result);
console.log(result2);
