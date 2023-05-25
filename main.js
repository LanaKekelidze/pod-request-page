// const form = document.querySelector("form")
// const input = document.querySelector(".submitDocs")
// const spanErr = document.querySelector(".errorMsg")
// console.log(spanErr)
// input.addEventListener("invalid", () => {
//     spanErr.classList.add("showError");
// })
// input.addEventListener("input", () => {
//     spanErr.classList.remove("showError")
// })
// form.addEventListener("submit", (evt) => {
//     console.log(evt)
//     evt.preventDefault()
//      alert("Your form has been submitted, Thank you")
//      input.value = ""
// })

/*if (input.validity.valid) {
    console.log("valid")
} else {
    console.log("not valid")
}*/
function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) 
    {
     form.classList.add("valid");
     form.classList.remove("invalid");
     text.innerHTML = "Your Email Address in Valid.";
     text.style.color = "#00ff00";
    }
    else
    {
       form.classList.remove("valid");
       form.classList.add("invalid");
      text.innerHTML = "Please Enter Valid Email Address.";
     text.style.color = "#ff0000";
    }
   if (email == "") 
   {
     form.classList.add("valid");
     form.classList.remove("invalid");
     text.innerHTML = "";
     text.style.color = "#00ff00";
   }
}