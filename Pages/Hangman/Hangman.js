import "./Hangman.css";
import { initContent } from "../../main";
import "../../components/Header/Header";
const mygobackbtn =document.querySelector('.goback');


let abecedario =['A','B','C','D','E','F','G','H','I','J','K','L', 'Ñ','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let word;
let aciertos=0;
let errores=0;
let myreset;
const palabras = ["LAPIZ", "COMIDA", "GATO","POKEMON", "ANTONIO" ];



export const template = () => `

<div class="fondo">
<div class="containtitle">
    <h1>Hangman Game</h1>
</div>
<div class="containerblocks">
    <div class="containFoto">
        <img  id="myphoto" src="../../public/Icons/foto0.png" alt="fotodelahorcado" />
    </div>
    <div class="containApp">
        <div class="containscore"> 
            <div class="wins">
                <p class="aciertos"></p>
                <p class="errores"></p>
            </div>
            <div class="reset">
                <button class="btnRandom">Get Word</button>
                <button class="btnReset">Reset Game</button> 
            </div>    
        </div>
        <div class="containspan">

        </div>
        <div class="containbtn">
            
        </div>
    </div>
</div>
</div>

`;

export const printTemplate = () => {
    
    document.querySelector("#app").innerHTML = template();
 
        createBtn();
        myrandomFunction();
  
    let myerrores=document.querySelector('.errores');
    let myaciertos=document.querySelector('.aciertos');
    myaciertos.textContent=`Aciertos:${aciertos}`;
    myerrores.textContent=`Errores:${errores}`;

     myreset=document.querySelector('.btnReset');
 myreset.disabled=true;
     
 resetFunction();
      
        

}



const createBtn =()=>{
    const mybtncontainer= document.querySelector('.containbtn');
    for (const letra of abecedario) {
         const mynewbtn=document.createElement('button');
        mybtncontainer.appendChild(mynewbtn);
        mynewbtn.classList.add('btn');
        mynewbtn.disabled=true;
        mynewbtn.textContent=`${letra}`;
         
        
        mynewbtn.addEventListener('click', ()=>{
            const myspans=document.querySelectorAll('span');
            mynewbtn.disabled=true;
            const letter=mynewbtn.innerHTML;
            let acerto= false;
            
            for (let index = 0; index < word.length; index++) {
                if (letter == word[index]) {
                    myspans[index].innerHTML=letter;
                    acerto = true;
                    aciertos++;
                    let myaciertos=document.querySelector('.aciertos');
                    myaciertos.textContent=`Aciertos:${aciertos}`;
                }
                
            }
            if(aciertos == word.length){
                Swal.fire({
                    title: '<strong>¡¡You Win!!</strong>',
                    html:
                      '<img class="lose" src="../../public/Icons/ahorcadoganado.gif" alt="logoloose"> ',
                    showCloseButton: true,
                    focusConfirm: false,
                    height:500,
                    padding: '3em',
                    color: '#716add',
                    confirmButtonText:
                      '<i ></i> Try Again!',
                    
                  });
                    const mybtnsAll=document.querySelectorAll('.btn');
                    for (const onebtn of mybtnsAll) {
                        onebtn.disabled=true;
                        
                    }
                    myreset.disabled=false;
            }

            if (acerto == false) {
                errores++;
                let myerrores=document.querySelector('.errores');
                myerrores.textContent=`Errores:${errores}`;
                

                const myphoto=document.querySelector('#myphoto');
                let src =`../../public/Icons/foto${errores}.png`;
                myphoto.src=src;
                if(errores== 7){
                    Swal.fire({
                        title: '<strong>¡¡You Lose!!</strong>',
                        html:
                          '<img class="lose" src="../../public/Icons/youlose.gif" alt="logoloose"> ',
                        showCloseButton: true,
                        focusConfirm: false,
                        height:500,
                        padding: '3em',
                        color: '#716add',
                        confirmButtonText:
                          '<i ></i> Try Again!',
                        
                      });
                    const mybtnsAll=document.querySelectorAll('.btn');
                    for (const onebtn of mybtnsAll) {
                        onebtn.disabled=true;
                        
                    }
                   myreset.disabled=false
                }
                
               
            }
         })
    }
   

}




const myrandomFunction=()=>{

    const myramdonword = document.querySelector('.btnRandom');
myramdonword.addEventListener('click',()=>{
    const mybtns=document.querySelectorAll('.btn');
    for (const btn of mybtns) {
        btn.disabled=false;
    }
    word=palabras[Math.floor(Math.random() * palabras.length)];
    const mycontainspan= document.querySelector(".containspan");

    for (let index = 0; index < word.length; index++) {
        const mynewspan= document.createElement("span");
        mynewspan.classList.add('spanletter');
        mynewspan.innerHTML=`_`;
        mycontainspan.appendChild(mynewspan);       
    }
myramdonword.disabled=true;
})
}


const resetFunction=()=>{
 myreset.addEventListener("click", ()=>{
    errores=0;
    aciertos=0;
      printTemplate();

  })
};











