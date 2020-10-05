(function () {
  function activated(
    who: string,
    moment?: string,
    objec: string = "Batisignal"
  ) {
    if (moment) {
      console.log(`${who} activated ${objec} in the ${moment}`);
    } else {
      console.log(`${who} activated ${objec}`);
    }
  }

  activated("Gordon", "Aftermoon");
})();
