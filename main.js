const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');


let concatText = "";


function buttonPressed(event) {
  
  const text = event.target.textContent;
  
  if (text === "AC"){
  concatText = "";
  } 
  else if(concatText ==="" && text ==="00"){
    concatText = "0";
  } else if((concatText ==="") && (text ==="+" || text ==="-" || text ==="*" || text ==="/" || text ==="." || text ==="=")){
    concatText = ""
  }
  
  else if((concatText === "0") && (text ==="0" || text ==="00")){
    concatText = "0";
  } 
  else if((concatText ==="0") && (text ==="1" || text ==="2" || text ==="3" || text ==="4" || 
  text ==="5" || text ==="6" || text ==="7" || text ==="8" || text ==="9")){
    concatText = text;
  } 
  else if(((concatText.slice(-1) === "+") || (concatText.slice(-1) === "-") || (concatText.slice(-1) === "*") ||
 (concatText.slice(-1) === "/") || (concatText.slice(-1) ===".")) &&
  ((text === "+") || (text === "-") ||(text === "*") || (text === "/") || (text ==="."))){
    concatText = concatText.slice(0,-1);
    concatText += text;

  }
  else if(((concatText.slice(-1) === "+") || (concatText.slice(-1) === "-") || (concatText.slice(-1) === "*") ||
  (concatText.slice(-1) === "/")) && (text ==="00")){
   concatText += "0";
  } 
  else if(((concatText.slice(-1) ==="0") && ((concatText.slice(-2,-1) ==="+") || (concatText.slice(-2,-1) ==="-") || 
  (concatText.slice(-2,-1) ==="*") ||(concatText.slice(-2,-1) ==="/"))) && (text ==="0") || (text ==="00")){
   concatText = concatText;
 } 
  else if(((concatText.slice(-1) ==="0") && ((concatText.slice(-2,-1) ==="+") || (concatText.slice(-2,-1) ==="-") || 
  (concatText.slice(-2,-1) ==="*") ||(concatText.slice(-2,-1) ==="/"))) && ((text ==="1") || (text ==="2")|| (text ==="3")|| 
  (text ==="4")|| (text ==="5")|| (text ==="6")|| (text ==="7")|| (text ==="8")|| (text ==="9"))){
   concatText = concatText.slice(0,-1);
   concatText += text;
  }
  else if(text === "=") {
  concatText = eval(concatText);
    
  }else{
  concatText += text;
}
  result.textContent = concatText;
  };
 buttons.forEach(function(button) {
   button.addEventListener('click',buttonPressed);
});