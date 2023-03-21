import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('.feedback-form input'),
  textAreaEl: document.querySelector('.feedback-form textarea'),
};

const FORM_DATA_KEY = 'feedback-form-state';

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

let formData = {};
savedDataCheck();

function onFormInput(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value;
  formData[event.target.name] = event.target.value;
  const formDataStr = JSON.stringify(formData);
  localStorage.setItem(FORM_DATA_KEY, formDataStr);
}

function savedDataCheck() {
  const savedData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  if (savedData) {
    refs.inputEl.value = savedData.email || '';
    refs.textAreaEl.value = savedData.message || '';
    formData[refs.inputEl.name] = refs.inputEl.value;
    formData[refs.textAreaEl.name] = refs.textAreaEl.value;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.inputEl.value === '') {
    return alert('Please fill your email');
  } else if (refs.textAreaEl.value === '') {
    return alert('Please write your message');
  }
  console.log(JSON.parse(localStorage.getItem(FORM_DATA_KEY)));
  event.target.reset();
  localStorage.removeItem(FORM_DATA_KEY);
  formData = {};
}
