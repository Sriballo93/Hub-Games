import "./Header.css";
import { colorpiker } from "../Colorpicker/Colorpiker";
import { mygobackFunction } from "../Home/Home";
import { printTemplate as LoginTemplate } from "../../Pages/Login/Login";
import { name } from "../../Pages/Login/Login";

export const template = () => `
      <div class="headercontainer">
      <img class="goback" src="../../public/Icons/home.png" alt="logodelhome"/> 
      <img class="random colorchange" src="../../public/Icons/colorpicker.gif"/>
      <button class="logout">
            <img class="logout" src="../../public/Icons/logout.png" alt="logout"/>
      </button>
</div>
`

export const printTemplate = () => {
    document.querySelector("#header").innerHTML = template();
    colorpiker();
     mygobackFunction();

     const mylogout=document.querySelector('button.logout');
mylogout.addEventListener("click", ()=>{
      localStorage.clear(name);
      LoginTemplate();
})
  }; 
  

  printTemplate();




