let charizardImg = new Image(300, 300);
charizardImg.src = 'assets/images/Charizard-removebg-preview.png'
let raichuImg = new Image(300, 300);
raichuImg.src = 'assets/images/raichu-removebg-preview.png'
let blastoiseImg = new Image(300, 300);
blastoiseImg.src = 'assets/images/pokemon-blastoise-nicknames-removebg-preview-removebg-preview.png'
let charmeleonImg = new Image(250, 250);
charmeleonImg.src = 'assets/images/Charmeleon.png'
let pikachuImg = new Image(250, 250);
pikachuImg.src = 'assets/images/pikachu-removebg-preview.png'
let wartortleImg = new Image(250, 250);
wartortleImg.src = 'assets/images/wartortle-removebg-preview.png'

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

      }
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
      }
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
      }
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
      }
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
      }
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
      }
  }
]




const divPokemoni = document.querySelector('.pokemoni')

const buttonPokretac = document.createElement('button')
buttonPokretac.className = 'pokretac'
buttonPokretac.textContent = 'Izaberi svog pokemona'

divPokemoni.append(buttonPokretac)

const resetDugme = document.createElement('button')
resetDugme.className = 'reset-dugme'
resetDugme.textContent = 'RESET'

divPokemoni.append(resetDugme)

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
          buttonIzaberi.textContent = 'Izaberi me!'
          buttonIzaberi.className = 'izaberi-button'

          button1.append(divPar,buttonIzaberi)
         
          divPrvi.append(divPok)
          

          buttonIzaberi.addEventListener('click', ()=>{


            let pokemonImgDiv = document.createElement('div');
            pokemonImgDiv.className = 'pokemon-img-div';
            let choosenPokemon = document.createElement('img');
            choosenPokemon.setAttribute('src', pokemon.img);
            choosenPokemon.setAttribute('alt', pokemon.name);

            pokemonImgDiv.appendChild(choosenPokemon)
            buttonIzaberi.append(pokemonImgDiv);
            
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
          buttonIzaberi.textContent = 'Izaberi me!'
          buttonIzaberi.className = 'izaberi-button'

          buttonIzaberi.addEventListener('click',()=>{
              
              let izabranik2 = document.createElement('p')
              izabranik2.textContent = `Izabrali ste za protivnika: ${pokemon.ime}`
              buttonIzaberi.append(izabranik2)
          })


          button2.append(divPar2, buttonIzaberi)
          divDrugi.append(divPok2)

  })
  
      })


    
  
})

buttonProtivnik.addEventListener('click',()=>{
  buttonProtivnik.remove()
})