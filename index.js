let pokemoni = [

  {
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