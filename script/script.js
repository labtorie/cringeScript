const startButton = document.querySelector('.start-button'),
firstScreen  = document.querySelector('.first-screen'),
mainForm  = document.querySelector('.main-form'),
formCalculate = document.querySelector('.form-calculate'),
endButton = document.querySelector('.end-button'),
total = document.querySelector('.total'),
fastRange = document.querySelector('.fast-range');

function showElement(target) {
   target.style.display = 'block';
}

function hideElement(target) {
    target.style.display = 'none';
}
 

startButton.addEventListener('click', function(){
    hideElement(firstScreen);
    showElement(mainForm);
} );

endButton.addEventListener('click', function(){
    for (const elem of formCalculate.elements)
    {
        if (elem.tagName === 'FIELDSET')
        {
            hideElement(elem);
        }
    }
    showElement(total);
});

function handlerCallBackForm(event){
    const target = event.target;
    if(target.classList.contains('want-faster'))
       { target.checked ? showElement(fastRange) : hideElement(fastRange);}
}

formCalculate.addEventListener('change', handlerCallBackForm);