const btnThird = document.getElementById('btn-3');
const callThird = document.getElementById('call-3');
const numThird = document.getElementById('num-3');

btnThird.addEventListener('mouseover', () => {
    callThird.classList.add('visually-hidden');
    numThird.classList.remove('visually-hidden');
});

btnThird.addEventListener('mouseout', () => {
    callThird.classList.remove('visually-hidden');
    numThird.classList.add('visually-hidden');
});