const display_age = document.getElementById("display_age");
const dob = document.querySelector("#input_dob");
var today = new Date();
document.getElementById("currDate").innerText="Date today : " + today.toLocaleDateString();
const submitButton = document.getElementById("button").addEventListener("click",() => {

    var birthDate = new Date(dob.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if((month < 0) || ((month === 0) && today.getDate() < birthDate.getDate()))
        age = age - 1;
    display_age.style.visibility="visible";
    if(age === 0 || age === 1)
    document.getElementById("display_age").innerText = "You are "+ age + " year old.";
    document.getElementById("display_age").innerText = "You are "+ age + " years old.";
});



