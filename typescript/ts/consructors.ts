(() => {
  /*class Hunter {
    name: string;
    team: string;
    realName: string;

    cantFigth: boolean;
    wins: number;

    constructor(name: string, team: string) {
      this.name = name;
      this.team = team;
    }
  }
*/

  class Hunter {
    /*name: string;
    team: string;
    realName: string;

    canFigth: boolean;
    wins: number;*/

    constructor(
      public name: string,
      public team: string,
      public realName?: string,
      public canFigth?: Boolean,
      public wins?: number
    ) {}
  }
  let Kilua = new Hunter("Kilua", "Hunters");

  console.log(Kilua);
})();
