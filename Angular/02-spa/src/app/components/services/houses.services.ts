import { Injectable } from '@angular/core';

@Injectable()
export class HousesService {
    private houses: Houses[] = [
        {
          house: 'House Stark',
          words: 'Winter is Coming',
          img: '../../../assets//img/PNG/Stark.png',
          founder: 'Bran the Builder',
          bio: 'House Stark of Winterfell is a Great House of Westeros and the royal house of the Kingdom of the North. They rule over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and early on in Daenerys Targaryens war for Westeros, the leaders of House Stark ruled over the region as the Kings in the North. ',
        },
         {
          house: 'House Targaryen',
          words: '"Fire and Blood"',
          img: '../../../assets//img/PNG/Targaryen.png',
          founder: 'Aegon Targaryen (Westeros)',
          bio: 'House Targaryen of Dragonstone is an exiled Great House of Westeros and the former royal house of the Seven Kingdoms. House Targaryen conquered and unified the realm before it was deposed during Roberts Rebellion and House Baratheon replaced it as the new royal House. The two surviving Targaryens, Viserys and Daenerys, fled into exile to the Free Cities of Essos across the Narrow Sea. House Lannister replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor, but the realm was reconquered by Daenerys Targaryen, retaking the Iron Throne following the Battle of Kings Landing. After she laid waste to a surrendered Kings Landing, Daenerys was assassinated by Jon Snow to prevent further destruction. Jon became the last known living member of House Targaryen and his identity as the son of Rhaegar Targaryen is kept hidden from Westeros. He is exiled to the Nights Watch for the assassination of Daenerys. The bloodline of House Targaryen also still exists in various houses, such as House Baratheon, House Velaryon, and House Martell. House Targaryens sigil is a three-headed red dragon on a black background, and their house words are "Fire and Blood." ',
        },
         {
          house: 'House Baratheon',
          words: '"Ours is the Fury"',
          img: '../../../assets//img/PNG/Baratheon.png',
          founder: 'Orys Baratheon',
          bio: 'House Baratheon of Storms End is a Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister took control of the throne, though lost it to House Targaryen. House Baratheon traditionally rules the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storms End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark. House Baratheon became extinct after the deaths of Stannis Baratheon and his family, but was revived when Roberts last bastard was legitimized by Queen Daenerys Targaryen as Gendry Baratheon. House Baratheons sigil is a crowned black stag on a gold background and their house words are: Ours Is the Fury ',
        },
         {
          house: 'House Lannister',
          words: '"Hear Me Roar!" (official) "A Lannister Always Pays His Debts" (common saying)',
          img: '../../../assets//img/PNG/Lannister.png',
          founder: 'Lann the Clever',
          bio: 'House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and one of its oldest dynasties. It was also the royal house of the Seven Kingdoms following the extinction of House Baratheon of Kings Landing, which had been their puppet house during the War of the Five Kings, for a brief stint of time until House Targaryen took back the Iron Throne in Daenerys Targaryens war for Westeros. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also ruled directly over the Crownlands from their seat of the Red Keep in Kings Landing, the traditional seat of the royal family. House Lannisters Heraldry consists of a golden lion on a crimson background, and their House words are "Hear me roar!", which are rarely mentioned. Their unofficial motto, which is as well known as the official one, is "A Lannister always pays his debts" - which is used much more often and mostly in negative context, though it can also be used in the original, literal sense.The incestuous relationship of Cersei and Jaime had been concealed in a conspiracy. Their son Joffrey Baratheon had claimed the Iron Throne on the premise that he was actually fathered by the late King Robert Baratheon. Lord Tywin was a key supporter of his reign in the War of the Five Kings. The Lannisters continued to hold sway when Tommen Baratheon ascended the throne, with Kevan Lannister as Hand of the King and Protector of the Realm, but lost their hold over Tommen to the Faith of the Seven, and, after destroying the Great Sept of Baelor, Cersei took the throne. With the deaths of Cersei and Jaime at the Battle of Kings Landing, Tyrion is now the head of House Lannister and given up the crown in favor of an elective monarchy. It currently swears fealty directly to the King of the Andals and the First Men, an office which is currently held by Bran Stark.',
        },
         {
          house: 'House Greyjoy',
          words: '"We Do Not Sow" (official) "What Is Dead May Never Die" (common saying)',
          img: '../../../assets//img/PNG/Greyjoy.png',
          founder: 'The Grey King',
          bio: 'House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoys sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. Following the extinction of House Hoare, the ironborn elected House Greyjoy as Lord of the Iron Islands, an administrative region of the Seven Kingdoms, as vassals to House Targaryen. During Roberts Rebellion, House Greyjoy declared for House Baratheon. During the Greyjoy Rebellion, Balon Greyjoy declared sovereignty as the Kingdom of the Iron Islands and seceded from the Seven Kingdoms, but the rebellion was put down. House Greyjoy bent the knee to Robert Baratheon, and the Kingdom of the Iron Islands became defunct. During the War of the Five Kings, Balon Greyjoy declared himself King of the Iron Islands and the Iron Islands independent once more, restoring the Kingdom of the Iron Islands and seceding from the Seven Kingdoms. Following his assassination and the election of his brother and murderer, Euron, as the new King of the Iron Islands, House Greyjoy was divided between Euron and his followers, and Balons surviving children, Yara and Theon, and their followers. During Daenerys Targaryens war for Westeros, Euron allied with Cersei of House Lannister, while Yara and her followers allied with Daenerys Targaryen, who Euron originally intended to ally with. After being set free by Theon, Yara retook the Iron Islands in Daenerys name. Theon died at the Battle of Winterfell while Euron died at the Battle of Kings Landing, leaving Yara firmly as the head and last living member of House Greyjoy.',
        },
         {
          house: 'House Martell',
          words: '"Unbowed, Unbent, Unbroken"',
          img: '../../../assets//img/PNG/Martell.png',
          founder: 'Morgan Martell',
          bio: 'House Martell of Sunspear is one of the Great Houses of Westeros. It rules the peninsula of Dorne in the far south of the continent from their castle Sunspear. Though loyal to the Iron Throne, the Martells were never conquered by the Targaryens and pursued a more isolated role in wider political events since Roberts Rebellion. House Martells sigil is a red sun pierced by a golden spear, on an orange field, a combination of the original Martell sigil - a yellow spear - and the emblem of Princess Nymeria - a red sun - to symbolize the marriage of the warrior-queen to Mors Martell. Their house words are "Unbowed, Unbent, Unbroken." With the assassinations of Prince Doran Martell and his only heir, Prince Trystane, by Ellaria Sand and the three eldest Sand Snakes, the Sand Snakes carried the Martell blood through their father Oberyn Martell. The Sand Snakes also continued to use the Martell sigil to represent themselves and Dorne. Under the leadership of Ellaria Sand and the Sand Snakes, the forces of House Martell and Dorne were aligned to support the cause of Daenerys Targaryen against House Lannister after they declared war against them. Following the deaths of the older Sand Snakes and Ellarias imprisonment in Kings Landing and likely death, an unnamed Martell acquires the lordship of Dorne, becoming its prince.',
        },
         {
          house: 'House Tully',
          words: '"Family, Duty, Honor"',
          img: '../../../assets//img/PNG/Tully.png',
          founder: 'Axel Tully',
          bio: 'House Tully of Riverrun is a Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor." At the onset of the War of the Five Kings, House Tully came under attack by House Lannister and lent its support for House Stark when they came to their aid in the liberation of the Riverlands. House Tully has since been formally stripped of lands and titles for rebellion against the Iron Throne, with Lord Edmure a captive of House Frey following the Red Wedding.  Later, Ser Brynden Tully gathered the remaining Tully forces and reclaimed Riverrun from the Freys, reopening conflict between the Tullys and the Iron Throne. The Freys lay siege to Riverrun, and were later assisted by the Lannisters on the orders of King Tommen I. Ser Jaime Lannister managed to end the siege by convincing Edmure Tully to command the garrison to lay down their weapons in return for clemency and protection. Brynden was killed during a final stand with Lannister and Frey forces while Edmure was returned to the Freys as a prisoner. Following the deaths of most of House Frey and the defeat of Cersei Lannister at Kings Landing, Edmure is freed and restored to his titles and lands. ',
        },
        {
          house: 'House Tyrell',
          words: '"Growing Strong"',
          img: '../../../assets//img/PNG/Tyrell.png',
          founder: 'Alester Tyrell',
          bio: 'House Tyrell of Highgarden is an extinct Great House of Westeros. It ruled over the Reach, a vast, fertile, and heavily-populated region of southwestern Westeros, from their castle-seat of Highgarden as Lords Paramount of the Reach and Wardens of the South after taking control of the region from House Gardener during the Targaryen conquest. The House was formerly led by Lord Mace Tyrell. Maces son Loras was a noted tournament knight and, secretly, the lover of Lord Renly Baratheon. Maces daughter Margaery married Renly when he crowned himself king in the War of the Five Kings to cement an alliance between Renly and her father. Following Renlys death, Margaery was then married to King Joffrey Baratheon before his assassination at his wedding feast. She was then married to his younger brother, King Tommen Baratheon. Maces mother, the indomitable Olenna Tyrell, assumed House Tyrells lordship after Margaery, Loras, and Mace Tyrell were all killed by wildfire at the destruction of the Great Sept of Baelor. Under Olenna, House Tyrell realigned itself with House Targaryen and declared for Daenerys Targaryen in opposition against Cersei Lannister, who had orchestrated the downfall of House Tyrell. With the death of Olenna after the Sack of Highgarden, the House has officially become extinct. In the TV series, the Tyrell family is very small, has only four known members of the main branch. The Tyrell sigil is a golden rose on a pale green field. Their house words are "Growing Strong." ',
        },
        {
          house: 'House Arryn',
          words: '"As High as Honor"',
          img: '../../../assets//img/PNG/Arryn.png',
          founder: 'Artys Arryn',
          bio: 'House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Defenders of the Vale and Wardens of the East under the Targaryen, Baratheon, and Lannister dynasties. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with Yohn Royce holding actual power over the house Their lands are in the central-eastern region of the continent. Their seat is the Eyrie, ancestral seat of the Mountain Kings. House Arryns sigil is a white crescent moon and falcon on a blue field. Their house words are "As High as Honor." ',
        },
    ];

    constructor(){
        console.log('service ON');
    }

    // tslint:disable-next-line: typedef
    getHouses(): Houses[] {
        return this.houses;
    }

    // tslint:disable-next-line: typedef
    getHouse( idx: string ){
      return this.houses[idx];
    }

    searchHouse( termino: string): Houses[]{
      // tslint:disable-next-line: prefer-const
      let houseArr: Houses[] = [];
      termino = termino.toLowerCase();

      // tslint:disable-next-line: prefer-const
      for ( let house of this.houses ){
        // tslint:disable-next-line: prefer-const
        let name = house.house.toLowerCase();
        if ( name.indexOf( termino ) >= 0){
          houseArr.push( house );
        }

      }
      return houseArr;
    }
}
export interface Houses{
  house: string;
  words: string;
  img: string;
  founder: string;
  bio: string;
}
