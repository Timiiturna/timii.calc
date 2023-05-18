let  displayEl = document.getElementById("display-el");
let buttons = Array.from (document.getElementsByClassName('button'))
buttons.map(buttons =>{
  buttons.addEventListener("click", (e) => {
switch (e.target.innerText){
  case 'C':
      displayEl.textContent =" "; 
      break;
      case '=':
        displayEl.textContent = eval(displayEl.textContent);
        break;
  default: 
  displayEl.textContent += e.target.textContent;}
});
});





