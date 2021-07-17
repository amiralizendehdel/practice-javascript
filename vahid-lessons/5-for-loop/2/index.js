let names = ["ahmad", "vahid", "amirali", "hasan", "hossein", "jafar"];
// names[0];

// document.getElementById("1").innerHTML = names[0];
// document.getElementById("2").innerHTML = names[1];
// document.getElementById("3").innerHTML = names[2];
// document.getElementById("4").innerHTML = names[3];
// document.getElementById("5").innerHTML = names[4];
// document.getElementById("6").innerHTML = names[5];

for (let i = 0; i < 6; i = i + 1) {
  document.getElementById(i + 1).innerHTML = names[i];
}
