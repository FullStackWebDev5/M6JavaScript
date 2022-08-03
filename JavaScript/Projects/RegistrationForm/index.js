function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let cityInput = document.getElementById('city').value
	// let stateInput = document.getElementById('state').value
	let zipInput = document.getElementById('zip').value
	// let tnCInput = document.getElementById('tnC').checked

	if(firstNameInput.length >= 1){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
	}
}