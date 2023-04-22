const form = document.querySelector(".login-form");
const submitButton = form.querySelector('button');


form.addEventListener("submit",(event)  => {
    event.preventDefault();
    const {
        elements : {email, password}
    } = event.currentTarget;
    
    if (email.value === "" ||
    password.value === "") {
        return alert("Всі поля повинні бути заповненими!")
    } else {
        const obj = {email:email.value, password:password.value};
        console.log(obj);
        event.currentTarget.reset();
    }
 });