

const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')

passwordInput.addEventListener('input', updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter() {
  const weaknesses = calculatePasswordStrength(passwordInput.value)


  reasonsContainer.innerHTML = ''
  weaknesses.forEach(weakness => {
    if (weakness == null) return
    const messageElement = document.createElement('div')
    messageElement.innerText = weakness.message
    reasonsContainer.appendChild(messageElement)
  })

}

function calculatePasswordStrength(password) {
  const weaknesses = []
  weaknesses.push(lengthWeakness(password))
  weaknesses.push(lowercaseWeakness(password))
  weaknesses.push(uppercaseWeakness(password))
  weaknesses.push(numberWeakness(password))
  weaknesses.push(specialCharactersWeakness(password))
  return weaknesses
}

function lengthWeakness(password) {
  const length = password.length

  if (length <= 5) {
    return {
      message: '*Your password is too short',

    }
  }

  if (length <= 10) {
    return {
      message: '*Your password could be longer',

    }
  }
}

function uppercaseWeakness(password) {
  return characterTypeWeakness(password, /[A-Z]/g, 'uppercase characters')

}

function lowercaseWeakness(password) {
  return characterTypeWeakness(password, /[a-z]/g, 'lowercase characters')
}

function numberWeakness(password) {
  return characterTypeWeakness(password, /[0-9]/g, 'numbers')
}

function specialCharactersWeakness(password) {
  return characterTypeWeakness(password, /[^0-9a-zA-Z\s]/g, 'special characters')
}

function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || []

  if (matches.length === 0) {
    return {
      message: `*Your password has no ${type}`,

    }
  }
}

document.getElementById('signup').addEventListener('click',matchPassword)
function matchPassword() {
  const passwordMain = document.getElementById('password-input').value;
  const confirmPassword = document.getElementById('re-enterPassword').value;
  if((passwordMain == '') || (confirmPassword == '')){
      alert('Password Fields are Empty')
  }  else if(passwordMain != confirmPassword){
    alert('Your Passwords do not match');
  }  else {
    alert('You have Successfully Signed Up')
  }
}
/* const pass_field = document.getElementById("passwords");
const show_btn = document.getElementsByClassName("fa-eye");
const hide_btn =document.getElementsByClassName("fa-eye-slash")
show_btn.addEventListener("click", function(){
  if(pass_field.type === "password"){
    pass_field.type = "text";

  }else{
    pass_field.type = "password";

  }
}); */
