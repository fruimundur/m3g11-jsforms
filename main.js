// I'm going to be targeting the IDs and classes quite a few times, so to make it more efficient, I start by creating these two functions:
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
// These functions allow me target IDs and classes by simply calling out a variable (which then invokes the function, which targets the id or class with the variable I called out)



// Here I store the IDs and classes inside the variables, which are used in the two functions above
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");



// Then I target the form element + add the 'submit' event listener. 
form.addEventListener("submit", (e) => {
  e.preventDefault();

// The event listener applies this function (the 'if statement' of the function determines which one of the following 3 is applied)
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});



// Here I create the engine function, which is used in the event listener above
// if the form is empty, an error message is displayed, a red border is applied around the input forms and the failure icon gets switched on
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    
        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } 

// if not (if the form is filled out correctly), we won't get any message, a green border is applied around the input forms and the success icon is switched on
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
    
        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }  
}