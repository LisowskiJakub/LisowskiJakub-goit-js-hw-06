const form = document.querySelector('.login-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
const {elements: {email, password}}=e.currentTarget;
if (email.value==='' || password.value===''){
    alert('Please fill in all the fields!');
}
else{
const userData= {email:email.value,password:password.value}
console.log(userData);
e.currentTarget.reset();
}
})