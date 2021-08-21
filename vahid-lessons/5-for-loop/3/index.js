let names = ["ahmad", "vahid", "amirali", "hasan", "hossein", "jafar", "ahmad", "amirali", "hasan", "hasan"];
let result = "";
for (let i = 0; i < names.length; i = i + 1) {
  result = result + "<li>" + names[i] + "</li>";
}
document.getElementById("result").innerHTML = result;

document.getElementById("button").onclick = function () {
  let filter = document.getElementById("filter").value;

  //
  let result2 = "";
  let not_result = "";

  for (let i = 0; i < names.length; i = i + 1) {
    if (names[i] == filter) {
      result2 = result2 + "<li>" + names[i] + "</li>";
    } else {
      not_result = not_result + "<li>" + names[i] + "</li>";
    }
  }
  document.getElementById("result").innerHTML = result2;
  document.getElementById("not_result").innerHTML = not_result;
  //
};
