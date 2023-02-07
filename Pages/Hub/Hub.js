import "./Hub.css";
import { name } from "../Login/Login";
import { initContent } from "../../main";
import "../../components/Header/Header";
const mygobackbtn =document.querySelector('.goback');


export const template = () => `

<div class="headerhub">
    <h1> Hello "${name}"</h1>
</div>
<section id="hubGames">
    <button class="hangman"><img class="hangmanfoto" src="../../public/Icons/elahorcado.gif" alt="juegoahorcado"/>
    </button>
    <button id="pokeapi"> <img class="hangmanfoto" src="../../public/Icons/pokeapilogo.png"   alt="pokemongame"/>
    </button>
    <button class="tictac"><img class="hangmanfoto" src="../../public/Icons/tictac.gif" alt="juegoahorcado"/>
    </button>
</section>

`;

export const addListeners = () => {
    document
      .querySelector(".hangman").addEventListener("click", () => {
          initContent("Hangman");
          mygobackbtn.style.display="block";    
    });
    document.querySelector("#pokeapi").addEventListener("click", () => {
        initContent("PokeApi");
      mygobackbtn.style.display="block";
    });
    document.querySelector(".tictac").addEventListener("click", () =>{
        initContent("Tictac");
        mygobackbtn.style.display="block";
      } );
  


  };

export const printTemplate = () => {
  
  document.querySelector("#app").innerHTML = template();
    addListeners();
  }; 

  
  
