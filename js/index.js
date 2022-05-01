const btn = document.getElementById('btn-2');
const call = document.getElementById('call-2');
const num = document.getElementById('num-2');

btn.addEventListener('mouseover', () => {
    call.classList.add('visually-hidden');
    num.classList.remove('visually-hidden');
});

btn.addEventListener('mouseout', () => {
    call.classList.remove('visually-hidden');
    num.classList.add('visually-hidden');
});