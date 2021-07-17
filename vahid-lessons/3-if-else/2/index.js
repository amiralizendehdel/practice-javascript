document.getElementById("go").onclick = function () {
  const X = document.getElementById("age").value;

  // method 1
  // const condition1 = X < 15;
  // const condition2 = X > 40;
  // const condition3 = 15 <= X && X <= 40;
  // if (condition1) {
  //   alert("young");
  // } else if (condition2) {
  //   alert("old");
  // } else if (condition3) {
  //   alert("OK");
  // }

  // method 2

  const ageOk = 15 <= X && X <= 40;
  const isOld = X > 40;
  const isYoung = X < 15;

  if (ageOk) {
    alert("ok");
  } else if (!ageOk) {
    alertError(isOld, isYoung);
  }

  function alertError(a, b) {
    if (a) {
      alert("Error : old");
    } else if (b) {
      alert("Error : young");
    }
  }
};
