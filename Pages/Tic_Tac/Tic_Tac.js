import "./Tic_Tac.css";
import { initContent } from "../../main";
let empate =[];
const mybtns = document.querySelectorAll('.tictac');
let fila1 =["1", "2", "3"];
let fila2 =["4", "5" ,"6"];
let fila3 =["7","8", "9"];
let win;   

export const template = () => `
<div class="tictacgame">

<div class="tictacheader">
    <h1> Tic Tac Toe</h1>
<h3> Who will win the next round?</h3>
<button id="resetGame"> RESET GAME </button>
</div>

<div class="btnContainer">
        <button id="uno" class="tictac"></button>
        <button id="dos" class="tictac"></button>
        <button id="tres" class="tictac"></button>
        <button id="cuatro" class="tictac"></button>
        <button id="cinco" class="tictac"></button>
        <button id="seis" class="tictac"></button>
        <button id="siete" class="tictac"></button>
        <button id="ocho" class="tictac"></button>
        <button id="nueve" class="tictac"></button>

</div>
</div>
`


export const printTemplate = () => {
  
    document.querySelector("#app").innerHTML = template();
        // createBtn();
       
        getposicion1();
        getposicion2();
        getposicion3();
        getposicion4();
        getposicion5();
        getposicion6();
        getposicion7();
        getposicion8();
        getposicion9();
       myreset();
   
  }; 

  let option = ["O" , "X"]

  export const getposicion1=()=>{
     const mybtn1=document.querySelector("#uno");
  mybtn1.addEventListener("click", ()=>{
   
    mybtn1.innerHTML=`${option[0]}`;
    mybtn1.disabled=true;
    option.reverse();
    fila1[0]= mybtn1.textContent;
    empate++;
    checkForWinner();


  })
  }

  export const getposicion2=()=>{
    const mybtn2=document.querySelector("#dos");
 mybtn2.addEventListener("click", ()=>{
   mybtn2.innerHTML=`${option[0]}`;
   mybtn2.disabled=true;
   option.reverse();
   fila1[1]= mybtn2.textContent;
   empate++;
   checkForWinner();
    
 })
 }

 export const getposicion3=()=>{
    const mybtn3=document.querySelector("#tres");
 mybtn3.addEventListener("click", ()=>{
  
   mybtn3.innerHTML=`${option[0]}`;
   mybtn3.disabled=true;
   option.reverse();
   fila1[2]= mybtn3.textContent;
   empate++;
   checkForWinner();
   
 })
 }
 export const getposicion4=()=>{
    const mybtn4=document.querySelector("#cuatro");
 mybtn4.addEventListener("click", ()=>{
  
   mybtn4.innerHTML=`${option[0]}`;
   mybtn4.disabled=true;
   option.reverse();
   fila2[0]= mybtn4.textContent;
   empate++;
   checkForWinner();
   
 })
 }
 export const getposicion5=()=>{
    const mybtn5=document.querySelector("#cinco");
 mybtn5.addEventListener("click", ()=>{
  
   mybtn5.innerHTML=`${option[0]}`;
   mybtn5.disabled=true;
   option.reverse();
   fila2[1]= mybtn5.textContent;
   empate++;
   checkForWinner();
   
 })}

 export const getposicion6=()=>{
    const mybtn6=document.querySelector("#seis");
 mybtn6.addEventListener("click", ()=>{
  
   mybtn6.innerHTML=`${option[0]}`;
   mybtn6.disabled=true;
   option.reverse();
   fila2[2]= mybtn6.textContent;
   empate++;
   checkForWinner();
  
 })


 }
 export const getposicion7=()=>{
    const mybtn7=document.querySelector("#siete");
 mybtn7.addEventListener("click", ()=>{
  
   mybtn7.innerHTML=`${option[0]}`;
   mybtn7.disabled=true;
   option.reverse();
   fila3[0]= mybtn7.textContent;
   empate++;
   checkForWinner();
   
 })
 }
 export const getposicion8=()=>{
    const mybtn8=document.querySelector("#ocho");
 mybtn8.addEventListener("click", ()=>{
  
   mybtn8.innerHTML=`${option[0]}`;
   mybtn8.disabled=true;
   option.reverse();
   fila3[1]= mybtn8.textContent;
   empate++;
   checkForWinner();

 })
 }


 export const getposicion9=()=>{
    const mybtn9=document.querySelector("#nueve");
 mybtn9.addEventListener("click", ()=>{
   mybtn9.innerHTML=`${option[0]}`;
   mybtn9.disabled=true;
   option.reverse();
   fila3[2]= mybtn9.textContent;
   empate++;
   checkForWinner();

 
 })
 }

 





 
 let mywinner =document.querySelector('#winner');
 export const checkForWinner=()=>{

 win = false;   
   
    if (fila1[0] ===fila1[1] && fila1[1] ===fila1[2]  ) {
        
       win = true;
        Swal.fire(
        `Ha ganado el player ${fila1[0]} `);
        disablebtns();

       
    }
    if (fila2[0] ===fila2[1] && fila2[1] ===fila2[2]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila2[0]}  `);
            disablebtns();
            
    
    }
    if (fila3[0] ===fila3[1] && fila3[1] ===fila3[2]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila3[0]} `);
            const mytictacbtns=document.querySelectorAll('.tictac');
            disablebtns();
            
    }
    
    if (fila1[0] ===fila2[0] && fila2[0] ===fila3[0]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila1[0]}`);
            const mytictacbtns=document.querySelectorAll('.tictac');
            disablebtns();
            
    }
    if (fila1[1] ===fila2[1] && fila2[1] ===fila3[1]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila2[1]}`);
            const mytictacbtns=document.querySelectorAll('.tictac');
            disablebtns();
            
    }
    if (fila1[2] ===fila2[2] && fila2[2] ===fila3[2]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila1[2]}`);
            const mytictacbtns=document.querySelectorAll('.tictac');
            disablebtns();
            
    }

    if (fila1[0] ===fila2[1] && fila2[1] ===fila3[2]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila2[1]}`);
            const mytictacbtns=document.querySelectorAll('.tictac');
            disablebtns();
            
    }
    if (fila1[2] ===fila2[1] && fila2[1] ===fila3[0]  ) {
      win = true;
        Swal.fire(
            `Ha ganado player ${fila3[0]}`);
            disablebtns();
            
    } 

    if( empate == 9 && win == false){   
        Swal.fire(
        `Han empatado`);
        
    }



 }

 

 const myreset =()=>{
   const resetGame = document.querySelector('#resetGame')
 resetGame.addEventListener("click", () =>{
mybtns.disabled = false;
mybtns.textContent='';
empate=0
fila1 =["1", "2", "3"];
fila2 =["4", "5" ,"6"];
fila3 =["7","8", "9"];
printTemplate();
const mytictacbtns=document.querySelectorAll('.tictac');
for (const btn of mytictacbtns) {
  btn.disabled=false;
  
}

})
 
 }


const disablebtns=()=>{
  const mytictacbtns=document.querySelectorAll('.tictac');
 if (win ==true) {
   for (const btn of mytictacbtns) {
     btn.disabled=true;
   }
   
 }
}
 













