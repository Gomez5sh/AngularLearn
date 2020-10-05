(function () {
  const miFuntion = (a: string) => a.toLowerCase();

  console.log(miFuntion("Hi"));

  const add = (a: number, b: number) => a + b;

  console.log(add(20, 51));

  const Hulk = {
    name: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.name} smash!!`);
      }, 1000);
    },
  };

  Hulk.smash();
})();
