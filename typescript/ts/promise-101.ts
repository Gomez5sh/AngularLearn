(() => {
  console.log("Start");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timeout is finish");
    }, 1000);
  });

  promise
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.warn(err));
  console.log("Finish");
})();
