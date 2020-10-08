(() => {
  interface Hunter {
    name: string;
    age: number;
    nen?: string;
  }

  const sentMision = (hunter: Hunter) => {
    console.log(`Sent to ${hunter.name} to the mision`);
  };

  const returnToTheMision = (hunter: Hunter) => {
    console.log(`Return ${hunter.name} to the mision`);
  };

  const Gon: Hunter = {
    name: "Gon",
    age: 14,
  };

  sentMision(Gon);
  returnToTheMision(Gon);
})();
