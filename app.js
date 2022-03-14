const diceBtn = document.querySelector('.icon-holder');
const titleAdv = document.querySelector('.h1-advice');
const txtAdv = document.querySelector('.text-advice');

diceBtn.addEventListener('click', () => {
    getAdvice();
});

window.onload = () => {
    getAdvice();
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(advData => {
        const advObj = advData.slip;
        txtAdv.innerHTML = `“${advObj.advice}”`;
        titleAdv.innerHTML = `Advice #${advObj.id}`;
    }).catch(error => console.log(error));
}