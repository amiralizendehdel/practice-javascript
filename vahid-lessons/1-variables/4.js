// server
const server1 = {
  myName: "sfsdf",
  myNumber: 12312,
  myfunction: function () {
    alert("function is running!");
  },
  myArray: ["1232", "asdasd", "vvvvv"],
  isAdmin: true,
};

const Person = server1;

console.log(Person.myName);
console.log(Person.myfunction());
console.log(Person.myArray[1]); // asdasd

if (Person.isAdmin) {
  ///  show secret panel
} else {
  /// do not show
}
