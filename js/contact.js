const formEl = document.getElementById('js-form');
const nameEl = document.getElementById('input-name')
const emailEl = document.getElementById('input-mail')
const textareaEl = document.getElementById('comment')



const FORM_STATE = "feedback-form-state";
let formData = {};
formFillOut()

formEl.addEventListener('input', onInputChange);
formEl.addEventListener('submit',  onFormSubmit)

function onInputChange(evt){

    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));

}
function onFormSubmit (evt) {
    evt.preventDefault();
    evt.target.reset();
    formData = {};
    localStorage.removeItem(FORM_STATE);
}

function formFillOut(){
const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
if (savedData === null || savedData === undefined) {
    return
}
formData = savedData;

if(savedData){
    nameEl.value = savedData.name ? savedData.name : nameEl.value;
    emailEl.value = savedData.email ? savedData.email : emailEl.value;
    textareaEl.value = savedData.message ? savedData.message : textareaEl.value;
}
}