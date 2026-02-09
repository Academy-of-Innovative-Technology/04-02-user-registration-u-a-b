let form = document.querySelector("form");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let country = document.querySelector("#country");
let standard = document.querySelector("#standard[name='accountType']:checked");
let premium = document.querySelector("#premium[name='accountType']:checked");
let text = document.querySelector("#text");

form.addEventListener("click", function(){
form.preventDefault();
});

document.querySelector(".btn-primary").addEventListener("click", function (event) {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue =  email.value;
    let passwordValue = password.value;
let countryValue = country.value;
let standardValue = standard.value;
let premiumValue = premium.value;
let textValue = text.value;

const user = {
first: firstNameValue,
last: lastNameValue,
email: emailValue,
password: passwordValue,
country: countryValue,
standard: standardValue,
premium: premiumValue,
text: textValue
};

let jsonString = JSON.stringify(user);
localStorage.setItem("registeredUser", jsonString);


});

