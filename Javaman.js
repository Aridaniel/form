//Get element from html

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//Preventdefault
form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    checkInputs();
})



//Main function
function checkInputs(){
    //get values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();



    // Make a boolean to check if all inputs boxesa are succes then alert submit form
    let isEverythingCorrect = true

    
    


    //check if username input is empty or has content
    if (usernameValue === '')
    {
        isEverythingCorrect = false
        setErrorFor(username, 'Username cannot be blank')

    } else {
        
        setSucccesFor(username)
    }

    //Email     

    if (emailValue === '')
    {
        isEverythingCorrect = false
        setErrorFor(email, 'Email cannot be blank')

    } else if(!isEmail(emailValue)){
        isEverythingCorrect = false
        setErrorFor(email, 'Email is not valid')

    }else {
       
        setSucccesFor(email)
    }






    //check for password
    if (passwordValue === '')
    {
        isEverythingCorrect = false
        setErrorFor(password, 'Password cannot be blank')

    } else {
        
        setSucccesFor(password)
    }



    if (password2Value === '')
    {
        isEverythingCorrect = false
        setErrorFor(password2, 'Password2 cannot be blank')

    } 
    // Checks if password and password2 is same or not
    else if(passwordValue !== password2Value)
    {
        isEverythingCorrect = false
        setErrorFor(password2, 'Passwords does not match')
    }
     else {
        
        setSucccesFor(password2)
    }

  
//"Form submited"
    if (isEverythingCorrect){
        alert('Form sumbitted')
    }
    
}



   


//Error function

function setErrorFor(input , message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error'
}



//Success function
function setSucccesFor(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}




//Check if email is valid


function isEmail(email) 
{
 return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
 
}




