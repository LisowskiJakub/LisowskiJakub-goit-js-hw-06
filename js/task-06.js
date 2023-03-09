const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', (e) => {
   
    if (Number(validationInput.dataset.length) ===e.target.value.length) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
})
