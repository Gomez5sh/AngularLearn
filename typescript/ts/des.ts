(() => {
  const DC = {
    name: "Bruce",
    key: "Batman",
    power: "Inteligence",
  };

  const { name, key, power } = DC;

  const hero = `${name}, ${key}, ${power}`;

  console.log(hero);

  const extrac = ({ name, key }: any) => {
    //const { name, key } = superHero;
    console.log(name);
    console.log(key);
  };

  //extrac(DC);

  const avengers: string[] = ["Tor", "Spiderman", "Ironman"];

  const [tor, men, spidi] = avengers;
  console.log(spidi, men, tor);
})();
