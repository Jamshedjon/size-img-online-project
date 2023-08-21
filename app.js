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

