let charizardImg = new Image(300, 300);
charizardImg.src = "assets/images/Charizard-removebg-preview.png";
charizardImg.width = 300;
charizardImg.height = 300;
let raichuImg = new Image(300, 300);
raichuImg.src = "assets/images/raichu-removebg-preview.png";
raichuImg.width = 300;
raichuImg.height = 300;
let blastoiseImg = new Image(300, 300);
blastoiseImg.src =
  "assets/images/pokemon-blastoise-nicknames-removebg-preview-removebg-preview.png";
blastoiseImg.width = 300;
blastoiseImg.height = 300;
let charmeleonImg = new Image(20, 20);
charmeleonImg.src = "assets/images/Charmeleon.png";
charmeleonImg.width = 20;
charmeleonImg.height = 20;
let pikachuImg = new Image(250, 250);
pikachuImg.src = "assets/images/pikachu-removebg-preview.png";
pikachuImg.width = 250;
pikachuImg.height = 250;
let wartortleImg = new Image(250, 250);
wartortleImg.src = "assets/images/wartortle-removebg-preview.png";
wartortleImg.width = 250;
wartortleImg.height = 250;

let choosenPokemon = {
  name: "Choosen Pokemon",
};
let choosenOpponent = {
  name: "Choosen Opponent",
};

let pokemoni = [
  {
    img: charizardImg,
    name: "Charizard",
    type: "Fire",
    skills: ["Fire breath", "Tail swipe", "Block"],
    stats: {
      Attack: 10,
      Deffence: 6,
      Speed: 5,
    },
    choosen: false,
  },

  {
    img: raichuImg,
    name: "Raichu",
    type: "Electric",
    skills: ["Thunder spear", "zig-zag jump", "Dodge"],
    stats: {
      Attack: 6,
      Deffence: 6,
      Speed: 8,
    },
    choosen: false,
  },

  {
    img: blastoiseImg,
    name: "Blastoise",
    type: "Water",
    skills: ["Water cannon", "spinning shell", "Block"],
    stats: {
      Attack: 6,
      Deffence: 10,
      Speed: 4,
    },
    choosen: false,
  },

  {
    img: charmeleonImg,
    name: "Charmeleon",
    type: "Fire",
    skills: ["Fire ball", "dodge"],
    stats: {
      Attack: 4,
      Deffence: 4,
      Speed: 6,
    },
    choosen: false,
  },

  {
    img: pikachuImg,
    name: "Pikachu",
    type: "Electric",
    skills: ["Small zap", "dodge"],
    stats: {
      Attack: 4,
      Deffence: 3,
      Speed: 10,
    },
    choosen: false,
  },

  {
    img: wartortleImg,
    name: "Wartortle",
    type: "Water",
    skills: ["Water breath", "block"],
    stats: {
      Attack: 3,
      Deffence: 6,
      Speed: 5,
    },
    choosen: false,
  },
];

const divPokemoni = document.querySelector(".pokemoni");

const buttonPokretac = document.createElement("button");
buttonPokretac.className = "pokretac";
buttonPokretac.textContent = "Izaberi svog pokemona";

divPokemoni.append(buttonPokretac);

const fightButton = document.createElement("button");
fightButton.className = "fight-dugme";
fightButton.textContent = "FIGHT!";

divPokemoni.append(fightButton);

buttonPokretac.addEventListener("click", (event) => {
  event.preventDefault();

  pokemoni.forEach((pokemon) => {
    let divPrvi = document.createElement("div");
    divPrvi.className = "prvi";

    let button1 = document.createElement("button");
    button1.className = "buttonPrvi";
    button1.textContent = `${pokemon.name}`;

    divPrvi.appendChild(button1);
    divPokemoni.append(divPrvi);

    button1.addEventListener("click", (event) => {
      button1.textContent = "";

      let divPok = document.createElement("div");
      divPok.className = "divPok";

      let divPar = document.createElement("p");
      divPar.className = "divPar";

      divPar.textContent = `Name: ${pokemon.name}.
          Type: ${pokemon.type}. 
          Skills: ${pokemon.skills}. 
          stats - Attack: ${pokemon.stats.Attack}, 
          Deffence: ${pokemon.stats.Deffence}, 
          Speed: ${pokemon.stats.Speed}`;

      let buttonIzaberi = document.createElement("button");
      buttonIzaberi.textContent = "Choose me!";
      buttonIzaberi.className = "izaberi-button";

      button1.append(divPar, buttonIzaberi);

      divPrvi.append(divPok);

      buttonIzaberi.addEventListener("click", () => {
        let allDivs = document.querySelectorAll(".prvi");

        allDivs.forEach((div) => {
          div.remove();
        });

        let pokemonImgDiv = document.createElement("div");
        pokemonImgDiv.className = "pokemon-img-div";
        let choosenPokemon = document.createElement("img");
        choosenPokemon.setAttribute("src", pokemon.img.src);
        choosenPokemon.setAttribute("alt", pokemon.name);
        choosenPokemon.className = "pokemon-img";

        pokemonImgDiv.appendChild(choosenPokemon);
        divPokemoni.append(pokemonImgDiv);
      });

      buttonIzaberi.addEventListener("click", () => {
        divPrvi.remove();
      });

      buttonIzaberi.addEventListener("click", () => {
        pokemon.choosen = true;
        Object.assign(choosenPokemon, { pokemon });
      });
    });
  });
});

buttonPokretac.addEventListener("click", () => {
  buttonPokretac.remove();
});

const divPokemoni2 = document.querySelector(".protivnik");

const buttonProtivnik = document.createElement("button");
buttonProtivnik.className = "button-protivnik";
buttonProtivnik.textContent = "Izaberi svog pokemona";

divPokemoni2.append(buttonProtivnik);

buttonProtivnik.addEventListener("click", () => {
  pokemoni.forEach((pokemon) => {
    let divDrugi = document.createElement("div");
    divDrugi.className = "drugi";

    let button2 = document.createElement("button");
    button2.className = "buttonDrugi";
    button2.textContent = `${pokemon.name}`;

    divDrugi.appendChild(button2);
    divPokemoni2.append(divDrugi);

    button2.addEventListener("click", () => {
      button2.textContent = "";

      let divPok2 = document.createElement("div");
      divPok2.className = "divPok";

      let divPar2 = document.createElement("p");
      divPar2.className = "divPar";

      divPar2.textContent = `Name: ${pokemon.name}. Type: ${pokemon.type}. Skills: ${pokemon.skills}. stats - Attack: ${pokemon.stats.Attack}, Deffence: ${pokemon.stats.Deffence}, Speed: ${pokemon.stats.Speed}`;

      let buttonIzaberi = document.createElement("button");
      buttonIzaberi.textContent = "Choose me!";
      buttonIzaberi.className = "izaberi-button";

      buttonIzaberi.addEventListener("click", () => {
        let allDivs = document.querySelectorAll(".drugi");

        allDivs.forEach((div) => {
          div.remove();
        });

        let pokemonImgDiv = document.createElement("div");
        pokemonImgDiv.className = "opponent-img-div";
        let choosenPokemon = document.createElement("img");
        choosenPokemon.setAttribute("src", pokemon.img.src);
        choosenPokemon.setAttribute("alt", pokemon.name);
        choosenPokemon.className = "pokemon-img";

        pokemonImgDiv.appendChild(choosenPokemon);
        divPokemoni2.append(pokemonImgDiv);
      });

      buttonIzaberi.addEventListener("click", () => {
        pokemon.choosen = true;
        Object.assign(choosenOpponent, { pokemon });
      });

      button2.append(divPar2, buttonIzaberi);
      divDrugi.append(divPok2);
    });
  });
});

buttonProtivnik.addEventListener("click", () => {
  buttonProtivnik.remove();
});

fightButton.addEventListener("click", () => {
  pokemoni.forEach((pokemon) => {
    if (pokemon.choosen == true) {
      if (
        choosenPokemon.pokemon.type == "Fire" &&
        choosenOpponent.pokemon.type == "Electric"
      ) {
        choosenPokemon.pokemon.stats.Attack += 2;
        choosenPokemon.pokemon.stats.Deffence += 2;
        choosenOpponent.pokemon.stats.Attack -= 1;
        choosenOpponent.pokemon.stats.Deffence -= 1;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      } else if (
        choosenPokemon.pokemon.type == "Water" &&
        choosenOpponent.pokemon.type == "Fire"
      ) {
        choosenPokemon.pokemon.stats.Attack += 2;
        choosenPokemon.pokemon.stats.Deffence += 2;
        choosenOpponent.pokemon.stats.Attack -= 1;
        choosenOpponent.pokemon.stats.Deffence -= 1;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      } else if (
        choosenPokemon.pokemon.type == "Electric" &&
        choosenOpponent.pokemon.type == "Water"
      ) {
        choosenPokemon.pokemon.stats.Attack += 2;
        choosenPokemon.pokemon.stats.Deffence += 2;
        choosenOpponent.pokemon.stats.Attack -= 1;
        choosenOpponent.pokemon.stats.Deffence -= 3;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      } else if (
        choosenPokemon.pokemon.type == "Electric" &&
        choosenOpponent.pokemon.type == "Fire"
      ) {
        choosenPokemon.pokemon.stats.Attack -= 1;
        choosenPokemon.pokemon.stats.Deffence -= 1;
        choosenOpponent.pokemon.stats.Attack += 2;
        choosenOpponent.pokemon.stats.Deffence += 2;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      } else if (
        choosenPokemon.pokemon.type == "Fire" &&
        choosenOpponent.pokemon.type == "Water"
      ) {
        choosenPokemon.pokemon.stats.Attack -= 1;
        choosenPokemon.pokemon.stats.Deffence -= 1;
        choosenOpponent.pokemon.stats.Attack += 2;
        choosenOpponent.pokemon.stats.Deffence += 2;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      } else if (
        choosenPokemon.pokemon.type == "Electric" &&
        choosenOpponent.pokemon.type == "Water"
      ) {
        choosenPokemon.pokemon.stats.Attack -= 1;
        choosenPokemon.pokemon.stats.Deffence -= 1;
        choosenOpponent.pokemon.stats.Attack += 2;
        choosenOpponent.pokemon.stats.Deffence += 2;
        console.log(choosenPokemon.pokemon.stats);
        console.log(choosenOpponent.pokemon.stats);
      }

      if (
        choosenPokemon.pokemon.stats.Attack >
        choosenOpponent.pokemon.stats.Deffence
      ) {
        let winnerDiv = document.querySelector(".winner");

        let winner = document.createElement("div");
        winner.className = "winner-div";

        let winnerText = document.createElement("p");
        winnerText.className = "winner-text";
        winnerText.textContent = "Omg! The left Player has won!";

        winner.appendChild(winnerText);
        winnerDiv.append(winner);

        fightButton.remove();

        return console.log("Omg! The left Player has won!");
      } else if (
        choosenPokemon.pokemon.stats.Attack <=
        choosenOpponent.pokemon.stats.Deffence
      ) {
        let winnerDiv = document.querySelector(".winner");
        let winner = document.createElement("div");
        winner.className = "winner-div";

        let winnerText = document.createElement("p");
        winnerText.className = "winner-text";
        winnerText.textContent = "Omg! The right Player has won!";

        winner.appendChild(winnerText);
        winnerDiv.append(winner);

        fightButton.remove();

        return console.log("Omg! The right Player has won!");
      }
    }
  });
});
