/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let firstNum = "";
let operator = "";
let secondNum = "";

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#calcDis");

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const value = event.target.innerText;
      

  
      if (value >= "0" && value <= "9") {
        if (operator === "") {
          firstNum = firstNum + value;
        } else {
          secondNum = secondNum + value;
        }
  
        console.log("First Number:", firstNum);
        
        display.textContent = firstNum + " " + operator + " " + secondNum; 
      } else if (value === "C") {
        firstNum = "";
        secondNum = "";
        operator = "";
        display.textContent = "0";
  
      } else if (value === "=") {
        if (firstNum !== "" && secondNum !== "") {
          let result = calculate(firstNum, operator, secondNum);
          display.textContent = result;
  
          // console.log("Calculation Result:", result);
  
          firstNum = result;
          secondNum = "";
          operator = "";
        }
      } else {
        if (firstNum !== "") {
          operator = value;
        }
  
        display.textContent = firstNum + " " + operator;
  
      }
    });
  });

/*-------------------------------- Functions --------------------------------*/

function calculate(num1, op, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (op === "+") {
    return num1 + num2;
  }
  if (op === "-") {
    return num1 - num2;
  }
  if (op === "*") {
    return num1 * num2;
  }
  if (op === "/") {
    if (num2 === 0) {
      return "Error";
    }
    return num1 / num2;
  }
}
//////////////////////////////////////////////////////////////////////

//! CODE GRAVEYARD

//option2
// CalcEl.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
// })









