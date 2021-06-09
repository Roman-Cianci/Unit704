// Connects the button tp the function 'check'
document.getElementById('button').addEventListener('click', check)
let userAge = 14
let userDate = 'Tuesday'

function check () {
 // Lets program read age as an integer and connects age and date to assigned input boxes.
  userAge = document.getElementById('input-First').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-Second').value

  // Checks and compares user age and day of the week to the student discount dates and ages.
  if ((userDate === 'Tuesday' || userDate === 'Thursday')||(userAge > 14 && userAge < 26)){ 
    document.getElementById('answer').innerHTML = 'You get student pricing.'
  } else {
    document.getElementById('answer').innerHTML = 'You get regular pricing.'
  }
}
