setTimeout(function () {
  //
  console.log("haaayyyy");
}, 3000);

const intervalID = setInterval(function () {
  console.log("ahmad");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 10000);

/////////////

// const showName = function () {
//   console.log("namesadfsd");
// };

// const id = setInterval(showName, 1000);
