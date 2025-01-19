/*-------------------------------- Constants --------------------------------*/







/*-------------------------------- Variables --------------------------------*/




/*------------------------ Cached Element Re ferences ------------------------*/

// option1
const buttonsEl = document.querySelectorAll('.button');
//////////////////////////////////////////////////////////////////////
//option2
const CalcEl = document.querySelector('#calculator');
const displayContainer = document.querySelector('.calcDis');

/*----------------------------- Event Listeners -----------------------------*/
//option1
buttonsEl.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.innerText);
         CalcEl.textContent = event.target.innerText;
         // CalcEl.innerText = "Hi";

    });
});
//////////////////////////////////////////////////////////////////////
//option2
// CalcEl.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
// })


/*-------------------------------- Functions --------------------------------*/









