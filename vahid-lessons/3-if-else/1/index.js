document.getElementById("go").onclick = function () {
  const X = document.getElementById("age").value;
  console.log("X");
  console.log(X);
  const condition1 = X >= 15; // true , false
  const condition2 = X < 15;
  //   if (condition1) {
  //     alert("OK");
  //   }

  //   if (condition2) {
  //     alert("young");
  //   }

  if (condition1) {
    alert("OK");
  } else {
    alert("young");
  }

  // two condition must be true:   cond1 && cond2
  // one of condition must be true:  cond1 || cond2

  // when condition not happen:  !cond

  // example:
  // method1 :

  if (condition1) {
    // nothing
  } else {
    // code HERE
  }

  // method2
  if (!condition1) {
    // code HERE
  }
};

if (a == b) {
  // mosavi :   1 == '1'
}

if (a != b) {
  // na mosavi
}
