let form = document.querySelector("form");
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let country = document.querySelector("#country");
let standard = document.querySelector("#standard[name='accountType']:checked");
let premium = document.querySelector("#premium[name='accountType']:checked");
let text = document.querySelector("#text");

form.addEventListener("click", function(event){
event.preventDefault();
});

document.querySelector(".btn-primary").addEventListener("click", function (event) {
    event.preventDefault();
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue =  email.value;
    let passwordValue = password.value;
let countryValue = country.value;
let standardValue = standard;
let premiumValue = premium;
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

let savedFirst = document.querySelector("#savedFirstName");
let savedLast = document.querySelector("#savedLastName");
let savedEmail = document.querySelector("#savedEmail");
let savedCountry = document.querySelector("#savedCountry");
let savedAccountType = document.querySelector("#savedAccountType");
 let savedAbout = document.querySelector("#savedAbout");

 savedFirst.textContent = user.first;
 savedLast.textContent = user.last;
savedEmail.textContent = user.email;
savedCountry.textContent = user.country;

if(standardValue === true){
    savedAccountType.textContent = user.standard;
}
else if(premiumValue === true){
    savedAccountType.textContent = user.premium;
}

savedAbout.textContent = user.text;
});

