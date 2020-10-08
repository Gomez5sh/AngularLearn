(() => {
  const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 1000;

    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("Fondos insuficientes");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };

  retirarDinero(500)
    .then((dineroActual) => console.log(`Saldo ${dineroActual}`))
    .catch((err) => console.warn(err));
})();
