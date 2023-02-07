import { printTemplate as Hubtemplate } from "../../Pages/Hub/Hub";


export const mygobackFunction=()=>{

    const myhomebtn=document.querySelector('.goback');
  
    myhomebtn.addEventListener('click',()=>{
        Hubtemplate();
        myhomebtn.style.display="none";
    });
}

