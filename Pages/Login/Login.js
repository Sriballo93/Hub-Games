import "./Login.css";
import { printTemplate as HubTemplate} from '../Hub/Hub'
const mygobackbtn =document.querySelector('.goback');
mygobackbtn.style.display="none";
export const template = () => `

<section class="login">
  <img src="/Icons/neolandlogo.png" alt="logoNeoland"/>
  <img src="/Icons/Neoland-Logo-CARD.png" alt="NeolandName"/>
  <h4>Introduce tu nombre</h4>
  <input type="text" id="loginInput"/>
  <button  id="loginBtn">Submit</button>
</section>
`;

export const name = [];

export const addListeners = () => {
    const loginInput = document.querySelector("#loginInput");
    document.querySelector("#loginBtn").addEventListener("click", () => {
       localStorage.setItem("user", loginInput.value);
      name.push(loginInput.value);
       
      HubTemplate();
    }
    )
    
  };

  export const printTemplate = () => {
    document.querySelector("#app").innerHTML = template();
    addListeners();
  }; 
  

