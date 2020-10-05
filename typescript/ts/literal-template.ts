(function () {
  function getAge() {
    return 100 + 100 + 300;
  }

  const name = "Emmanuel";
  const lastName = "Gomez";
  const age = 33;

  //Emmanuel Gomez (Age: 33)
  const aout = `${name} \n${lastName}\n(age:${getAge()})`;
  console.log(aout);
})();
