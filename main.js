const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

const numbers = document.querySelectorAll('.js-number');
const operators = document.querySelectorAll('.js-operator');

// const tyuui = function(){
//   alert('wanko')
// };

// numbers.forEach(function(number){
//   number.addEventListener('click',tyuui)
// });

// const suppressZero1 = str => {
//     //略
//     return str.replace(/^0+/, '');
// };
// console.log( suppressZero1('000001230') );

let zikai = 009;

const suppressZero = str => {
  return str.replace(/^0+/, '');
};

// const suppressZero1 = Number(zikai);
// console.log(suppressZero1);



let concatText = "";
// const suppressZero1 = Number(concatText);

// let mr = concatText.slice(-1);
// let enzanshi = ["+","-","*","/"];
// let mr = concatText.slice(-1);

function buttonPressed(event) {
  
  const text = event.target.textContent;
  if(text === "=") {
  concatText = eval(concatText);
} else if (text === "AC"){
  concatText = "";
} else if(((concatText.slice(-1) === "+") || (concatText.slice(-1) === "-") || (concatText.slice(-1) === "*") || (concatText.slice(-1) === "/")) &&
  ((text === "+") || (text === "-") ||(text === "*") || (text === "/"))){
    concatText = concatText.slice(0,-1);
    concatText = concatText + text;
  } else if(concatText.slice(-1) === "." && text === ".") {
    concatText = concatText.slice(0,-1);
    concatText = concatText + text;
    
  }else{
  concatText = concatText + text;
}
  // const suppressZero = Number(concatText);
  // result.textContent = suppressZero;
  result.textContent = concatText

 };


 buttons.forEach(function(button) {
   button.addEventListener('click',buttonPressed);
});


// const hyouzi = function() {
//   alert('kinako');
// }

// disappear2.addEventListener('click',hyouzi)


// const tyuui = function() {
  // alert('kinako');
// };

// document.querySelectorAll('button').forEach(function (button) {
    // button.addEventListener('click', tyuui);
// });

// addEventListener('click',tyuui);

