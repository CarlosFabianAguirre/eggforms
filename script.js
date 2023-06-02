const form = document.getElementById("myform");

form.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\^s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm(){
    const emailInpunt = document.getElementById("email");
    const email = emailInpunt.value;
    if(!validateEmail(email)){
        alert("por favor ingrese un email valido");
    }else {
        alert("correo electronico enviado correctamente")
    }
}