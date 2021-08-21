document.getElementById("go").onclick = function () {
  const Age = document.getElementById("age").value;

  switch (Age) {
    case "10":
      alert("You are young!");
      break;
    case "20":
      alert("You are still young!");
      break;
    default:
      alert("Incorrect age!");
  }
};
