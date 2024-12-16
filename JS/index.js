var signInEmail = document.querySelector('#signInEmail');
var signUpEmail = document.querySelector('#signUpEmail');
var loginButton = document.querySelector('#loginButton');
var signUpButton = document.querySelector('#signUpButton');
var welcomeAlert = document.querySelector('#welcomeAlert')
var NameOfUser;
var emailUpUser;
var passwordUpUser;
var emailSignIn;
var passwordSignIn;
// var user;
var arrOfUpValues =JSON.parse(localStorage.getItem('arrOfUpValues'))||[];
var signUpObject = {};
var validationResult = {};
var inputRegex = {
  nameSignUpInput:/^[A-Z][a-z]{2,12}$/,
  signUpEmail:/^.{2,10}@(gmail|yahoo|hotmail).com$/,
  SignUpPasss:/^[1-9]{4,13}$/
}
    loginButton?.addEventListener('click',function(){
        emailSignIn = signInEmail.value
        passwordSignIn = signInEmail.nextElementSibling.value;
       var user = arrOfUpValues.find(user => user.email === emailSignIn);
    if (user) {
    if (user.password === passwordSignIn) {
      window.location.href = 'Home.html';
      document?.querySelector('#alertPara2').classList.add('d-none')
      document?.querySelector('#alertPara2').classList.remove('d-block')
      clearSignIn()
    } else {
      document?.querySelector('#alertPara3').classList.add('d-block')
      document?.querySelector('#alertPara3').classList.remove('d-none')
      document?.querySelector('#alertPara2').classList.add('d-none')
      document?.querySelector('#alertPara2').classList.remove('d-block')
     }
    } else {
      document?.querySelector('#alertPara2').classList.add('d-block')
      document?.querySelector('#alertPara2').classList.remove('d-none')
    }
    })
    signUpButton?.addEventListener('click',function(){
        NameOfUser = signUpEmail.previousElementSibling.value;
        emailUpUser = signUpEmail.value;
        passwordUpUser = document.querySelector('#SignUpPasss').value;
        getSignUpValues();
  });
  function getSignUpValues(){
    signUpObject = {
      Name: NameOfUser,
      email: emailUpUser,
      password: passwordUpUser
  };
    var user = arrOfUpValues.find(user => user.email === emailUpUser);
    if(user){
      document.querySelector('#alertParaEmail').classList.remove('d-none')
    }else{
      inputValidate(signUpObject)
      if(validationResult.Name && validationResult.email && validationResult.password){
        document?.querySelector('#alertPara').classList.add('d-none')
        document?.querySelector('#alertPara').classList.remove('d-block')
        arrOfUpValues.push(signUpObject);
        localStorage.setItem('arrOfUpValues',JSON.stringify(arrOfUpValues))
        clearInputes()
      }else{
        document?.querySelector('#alertPara').classList.replace('d-none','d-block')
      }
    }
  }
  function inputValidate(values){
    validationResult.Name = inputRegex.nameSignUpInput.test(values.Name);
    validationResult.email = inputRegex.signUpEmail.test(values.email);
    validationResult.password = inputRegex.SignUpPasss.test(values.password);
    return validationResult;
}
function clearInputes(){
  document.querySelector('#nameSignUpInput').value = null;
  document.querySelector('#signUpEmail').value = null;
  document.querySelector('#SignUpPasss').value = null;
}
function clearSignIn(){
  document.querySelector('#signInEmail').value = null;
  document.querySelector('#SignInPasswordd').value = null;
}