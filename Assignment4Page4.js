//Contact Form Box was learned through https://www.codebrainer.com/blog/contact-form-in-javascript//
var input = {};

document.addEventListener("DOMContentLoaded", function(){
  input.email = document.getElementById('email');
  input.subject = document.getElementById('subject');
});

function isNotEmpty(value){
  if (value === null || typeof value == 'undefined') return false;

  return (value.length > 0);
}

function inputValidation(input, isNotEmpty){
  if (input === null) return false;

  let isInputValid = isNotEmpty(input.value);
  if (!isInputValid){
    input.className = 'placeholderRed';
  } else{
    input.className = '';
  }

  return isInputValid;
}

function isValid(){
  var valid = true;

  valid &= inputValidation(input.email, isNotEmpty);
  valid &= inputValidation(input.subject, isNotEmpty);

  return valid;
}

class User {
  constructor (email, subject){
    this.email = email;
    this.subject = subject;
  }
}

document.getElementById("email").placeholder = "E-mail:";
document.getElementById("subject").placeholder = "Subject:";
document.getElementById("message").placeholder = "Message";

function send() {
  if (isValid()){
    let user = new User(email.value, subject.value);

    alert('Your message has been sent! Due to the COVID-19 pandemic, there might be some delay in responses. We apologize for the inconvenience.');
  } else{
    alert('Your message was not sent. Please try again.');
  }
}
