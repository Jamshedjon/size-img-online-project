const title = document.getElementById('title')

// let randomNum= Math.floor(Math.random()*(100-50)+50)
// title.textContent=randomNum
// if(randomNum>=50&&randomNum<=70){
//   title.style.color='red'
// }else if(randomNum>=70&&randomNum<=85){
//   title.style.color='green'
// }else {
//   title.style.color='blue'
// }

// setTimeout(()=>{
//   title.classList.add('title')
// },5000)

//===========>

// const input = document.querySelector(".input");
// const title = document.querySelector(".title");

// input.addEventListener("input", (e) => {
//   let value = e.target.value;
//   let newValue = String(value).replaceAll("*", "");
//   title.textContent = newValue;
//   if (value.includes("*")) {
//     if (value.length > 1) {
//       if (
//         value.indexOf("*") === 0 &&
//         value.lastIndexOf("*") === value.length - 1
//       ) {
//         title.style.color = "yellow";
//         console.log(value.indexOf("*"));
//         console.log(value.lastIndexOf("*"));
//       }
//     }
//   }
// });


let inputX = document.getElementById('inputX')
let inputY = document.getElementById('inputY')
let clippy=document.getElementById('clippy')
let sizeTextX=document.getElementById('sizeX')
let sizeTextY=document.getElementById('sizeY')
let x=0,y=0;
inputX.addEventListener('input',(e)=>{
  x=(500-(e.target.value))/10
  clippy.style =` clip-path: inset(${x}% ${y}%);`
  sizeTextX.textContent=e.target.value + 'px'
})
inputY.addEventListener('input',(e)=>{
  y=(500-(e.target.value))/10
  clippy.style =` clip-path: inset(${x}% ${y}%);`
  sizeTextY.textContent=e.target.value + 'px'
})

