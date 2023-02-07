import { printTemplate as Hubtemplate } from "../Hub/Hub";
import "./PokeApi.css";
let mappedPokes;

let types=["water","fire","grass","poison","electric","bug","normal","ground","fairy","psychic","rock","ghost","ice","dragon","fighting"];

export const template = () => `

    <div class="header">
    <img class="pokeapi" src="../../public/Icons/pokeapilogo.png" alt="Logopokeapi">
    </div>
<section class="gallery">
<input type="text" id="searchInput" placeholder="Search your favorite pokemon" />

    <nav> 
   <button class="All"></button>
</nav>
    <div class="container"></div>
</section>

`;

const init = () => {
  getPokemons();
};

let pokemons = [];




const getPokemons= async() => {
  pokemons=[];
  for (let index = 1; index <= 150; index++){
  const getPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
const json = await getPoke.json();
    pokemons.push(json)
    
  }
  mapPokes(pokemons);
  

  
};

const filteredPokemons =(array, type)=>{
  const filteredGrass = array.filter((typ)=>
typ.type=== type);


printPokemons(filteredGrass);
}

const mapPokes = (pokemonList) => {
   mappedPokes = pokemonList.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
    type: pokemon.types[0].type.name.toLowerCase(),
    weight: pokemon.weight / 10,
 height:pokemon.height * 10,
 move1:pokemon.moves[0].move.name,
 move2:pokemon.moves[2]?.move.name,
 hp:pokemon.stats[0].base_stat,
 attack:pokemon.stats[1].base_stat,
defense:pokemon.stats[2].base_stat,
special_attack:pokemon.stats[3].base_stat,
special_defense:pokemon.stats[4].base_stat,
speed:pokemon.stats[5].base_stat,

  }))

  printPokemons(mappedPokes)
};
   

  const printPokemons = (characters) => {
    const mycontainer= document.querySelector(".container");
    
    mycontainer.innerHTML ="";
    for (const character of characters) {
      mycontainer.innerHTML += 
      `<div class="${character.type} pokemon" >
          <div class="card_title" ><p class="medium">${character.name}</p><p class="medium">${character.hp}</p></div>
          <img src=${character.image} class="imgPokemon" alt=${character.name} /> 
          <div class="info_container">
              <div><p class="medium">${character.move1}</p><p class="medium">${character.attack}</p></div>
              <div><p class="medium">${character.move2}</p><p class="medium">${character.special_attack}</p></div>
              <div><p class="small" >旅ロ京青利セムレ弱改フヨス波府かばぼ意送でぼ調掲察たス日西重ケアナ住橋ユムミク順待ふかんぼ人奨貯鏡すびそ。</p></div>
          </div>
      </div>`;
   }
  };


export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  init();

  const myinput=document.querySelector("#searchInput");
  myinput.addEventListener("input", (ev) => {
  
  const filteredCharacters = mappedPokes.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.value.toLowerCase()))
  printPokemons(filteredCharacters)
  
  });

  const myAll=document.querySelector('.All')
  myAll.addEventListener('click',() =>{
   
    printPokemons(mappedPokes);
    
  });
  
  const mygoback=document.querySelector('.goback');
  mygoback.addEventListener('click', ()=>{
    Hubtemplate();
  });

 mybuttonsFunction();


}

const mybuttonsFunction =()=> {

  const mynav = document.querySelector('nav');
for (const type of types) {
const mybtn = document.createElement('button');
    mybtn.classList.add(`${type}btn`);
    mybtn.classList.add('pokebtn');
     mynav.appendChild(mybtn);
     mybtn.addEventListener("click", ()=> {
       filteredPokemons(mappedPokes, `${type}`)
   }  )
 };
};
