function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let cityInput = document.getElementById('city').value
	// let stateInput = document.getElementById('state').value
	let zipInput = document.getElementById('zip').value
	// let tnCInput = document.getElementById('tnC').checked

	if(firstNameInput){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
	}

	if(lastNameInput){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
	}

	/* Email
	- Whether exists? - Done
	- @ - Done
	- . - Done
	- After last ., there should be atleast 2 characters - Done
	- First character cannot be @ - Done
	*/

	// Eg: ankit@gmail.com
	// Index of .: 11
	// Length of string: 15

	if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
		emailInput.indexOf('@') !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }
}