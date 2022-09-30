let charizardImg = new Image(300, 300);
charizardImg.src = 'assets/images/Charizard-removebg-preview.png'
charizardImg.width = 300;
charizardImg.height = 300;
let raichuImg = new Image(300, 300);
raichuImg.src = 'assets/images/raichu-removebg-preview.png'
raichuImg.width = 300;
raichuImg.height = 300;
let blastoiseImg = new Image(300, 300);
blastoiseImg.src = 'assets/images/pokemon-blastoise-nicknames-removebg-preview-removebg-preview.png'
blastoiseImg.width = 300;
blastoiseImg.height = 300;
let charmeleonImg = new Image(20, 20);
charmeleonImg.src = 'assets/images/Charmeleon.png'
charmeleonImg.width = 20;
charmeleonImg.height = 20;
let pikachuImg = new Image(250, 250);
pikachuImg.src = 'assets/images/pikachu-removebg-preview.png'
pikachuImg.width = 250;
pikachuImg.height = 250;
let wartortleImg = new Image(250, 250);
wartortleImg.src = 'assets/images/wartortle-removebg-preview.png'
wartortleImg.width = 250;
wartortleImg.height = 250;

let pokemoni = [

  {
      img: charizardImg,
      name: 'Charizard',
      type: 'Fire',
      skills: ['Fire breath', 'Tail swipe', 'Block'],
      stats: {
          Attack: 10,
          deffence: 6,
          speed: 5,

      },
      choosen: false,
  },

  {
      img: raichuImg,
      name: 'Raichu',
      type: 'Electric',
      skills: ['Thunder spear', 'zig-zag jump', 'Dodge'],
      stats: {
          Attack: 6,
          deffence: 6,
          speed: 8
      },
      choosen: false,
  },

  {
      img: blastoiseImg,
      name: 'Blastoise',
      type: 'Water',
      skills: ['Water cannon', 'spinning shell', 'Block'],
      stats: {
          Attack: 6,
          deffence: 10,
          speed: 4,
      },
      choosen: false,
  },

  { 
      img: charmeleonImg,
      name: 'Charmeleon',
      type: 'Fire',
      skills: ['Fire ball', 'dodge'],
      stats: {
          Attack: 4,
          deffence: 4,
          speed: 6,
      },
      choosen: false,
  },

  {
      img: pikachuImg,
      name: 'Pikachu',
      type: 'Electric',
      skills: ['Small zap', 'dodge'],
      stats: {
          Attack: 4,
          deffence: 3,
          speed: 10,
      },
      choosen: false,
  },

  {
      img: wartortleImg,
      name: 'Wartortle',
      type: 'Water',
      skills: ['Water breath', 'block'],
      stats: {
          Attack: 3,
          deffence: 6,
          speed: 5,
      },
      choosen: false,
  }
]




const divPokemoni = document.querySelector('.pokemoni')

const buttonPokretac = document.createElement('button')
buttonPokretac.className = 'pokretac'
buttonPokretac.textContent = 'Izaberi svog pokemona'

divPokemoni.append(buttonPokretac)

const fightButton = document.createElement('button')
fightButton.className = 'fight-dugme'
fightButton.textContent = 'FIGHT!'

divPokemoni.append(fightButton)

buttonPokretac.addEventListener('click',(event) =>{
 
  event.preventDefault();
  


  pokemoni.forEach(pokemon => {


      let divPrvi = document.createElement('div')
      divPrvi.className = 'prvi'
  
      let button1 = document.createElement('button')
      button1.className = 'buttonPrvi'
      button1.textContent = `${pokemon.name}`
  
      divPrvi.appendChild(button1)
      divPokemoni.append(divPrvi)

     
       
     

      button1.addEventListener('click', (event) => {
          button1.textContent = ''
         
          let divPok = document.createElement('div')
          divPok.className = 'divPok'

          let divPar = document.createElement('p')
          divPar.className = 'divPar'
       
          divPar.textContent = `Name: ${pokemon.name}.
          Type: ${pokemon.type}. 
          Skills: ${pokemon.skills}. 
          stats - Attack: ${pokemon.stats.Attack}, 
          deffence: ${pokemon.stats.deffence}, 
          speed: ${pokemon.stats.speed}`
         
          let buttonIzaberi = document.createElement('button')
          buttonIzaberi.textContent = 'Choose me!'
          buttonIzaberi.className = 'izaberi-button'

          button1.append(divPar,buttonIzaberi)
         
          divPrvi.append(divPok)
          

          buttonIzaberi.addEventListener('click', ()=>{


            let pokemonImgDiv = document.createElement('div');
            pokemonImgDiv.className = 'pokemon-img-div';
            let choosenPokemon = document.createElement('img');
            choosenPokemon.setAttribute('src', pokemon.img.src);
            choosenPokemon.setAttribute('alt', pokemon.name);
            choosenPokemon.className = 'pokemon-img'

            pokemonImgDiv.appendChild(choosenPokemon)
            divPokemoni.append(pokemonImgDiv);            
          }); 

          buttonIzaberi.addEventListener('click', ()=>{
            divPrvi.remove();
          });

          buttonIzaberi.addEventListener('click', ()=>{
            pokemon.choosen = true;
          });
          
      })
  })
})


buttonPokretac.addEventListener('click',()=>{
  buttonPokretac.remove()
})





const divPokemoni2 = document.querySelector('.protivnik')

const buttonProtivnik = document.createElement('button')
buttonProtivnik.className = 'button-protivnik'
buttonProtivnik.textContent = 'Izaberi svog pokemona'

divPokemoni2.append(buttonProtivnik)




buttonProtivnik.addEventListener('click',()=>{


  pokemoni.forEach(pokemon => {


      let divDrugi = document.createElement('div')
      divDrugi.className = 'drugi'
  
      let button2 = document.createElement('button')
      button2.className = 'buttonDrugi'
      button2.textContent = `${pokemon.name}`
  
      divDrugi.appendChild(button2)
      divPokemoni2.append(divDrugi)

      button2.addEventListener('click', () => {
          button2.textContent = ''

          let divPok2 = document.createElement('div')
          divPok2.className = 'divPok'

          let divPar2 = document.createElement('p')
          divPar2.className = 'divPar'

          divPar2.textContent = `Name: ${pokemon.name}. Type: ${pokemon.type}. Skills: ${pokemon.skills}. stats - Attack: ${pokemon.stats.Attack}, deffence: ${pokemon.stats.deffence}, speed: ${pokemon.stats.speed}`

          let buttonIzaberi = document.createElement('button')
          buttonIzaberi.textContent = 'Choose me!'
          buttonIzaberi.className = 'izaberi-button'

          buttonIzaberi.addEventListener('click', ()=>{


            let pokemonImgDiv = document.createElement('div');
            pokemonImgDiv.className = 'opponent-img-div';
            let choosenPokemon = document.createElement('img');
            choosenPokemon.setAttribute('src', pokemon.img.src);
            choosenPokemon.setAttribute('alt', pokemon.name);
            choosenPokemon.className = 'pokemon-img'

            pokemonImgDiv.appendChild(choosenPokemon)
            divPokemoni2.append(pokemonImgDiv);            
          }); 

          buttonIzaberi.addEventListener('click', ()=>{
            divDrugi.remove();
          });

          buttonIzaberi.addEventListener('click', ()=>{
            pokemon.choosen = true;
          });
          


          button2.append(divPar2, buttonIzaberi)
          divDrugi.append(divPok2)

  })
  
      })


    
  
})

buttonProtivnik.addEventListener('click',()=>{
  buttonProtivnik.remove()
})