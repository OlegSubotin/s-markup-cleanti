const btnEl = document.getElementById('btn');
const callEl = document.getElementById('call');
const numEl = document.getElementById('num');

btnEl.addEventListener('mouseover', () => {
    callEl.classList.add('visually-hidden');
    numEl.classList.remove('visually-hidden');
});

btnEl.addEventListener('mouseout', () => {
    callEl.classList.remove('visually-hidden');
    numEl.classList.add('visually-hidden');
});

