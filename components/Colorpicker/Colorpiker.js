
export const colorpiker = ()=>{

let hex = [1, 2, 3 ,4, 5, 6 ,7 , 8, 9, "A", "B",  "C", "D", "E", "F"]


const random = document.querySelector(".random")

 random.addEventListener("click", (ev)=>{
 if ( ev.target === random) {
  let color = "#";
  for (let index = 0; index < 6; index++) {
      color += hex[randomNumber()]
    
  }
  document.body.style.background = color;
 }
  
})

 function randomNumber (){
  return Math.floor(Math.random() * hex.length)
}



};

