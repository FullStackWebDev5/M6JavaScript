let encryptionRule = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
}

const DB_USERS = []

const resetSignupFields = () => {
	document.getElementById('signup-first-name').value = ''
	document.getElementById('signup-last-name').value = ''
	document.getElementById('signup-phone').value = ''
	document.getElementById('signup-email').value = ''
	document.getElementById('signup-password').value = ''
	document.getElementById('signup-confirm-password').value = ''
}

const resetLoginFields = () => {
	document.getElementById('login-email').value = ''
	document.getElementById('login-password').value = ''
}

const signup = () => {
	let firstName = document.getElementById('signup-first-name').value
	let lastName = document.getElementById('signup-last-name').value
	let phone = document.getElementById('signup-phone').value
	let email = document.getElementById('signup-email').value
	let password = document.getElementById('signup-password').value

	let signupSuccessAlert = document.getElementById('signup-alert-success')
	// let signupFailureAlert = document.getElementById('signup-alert-failure') - Validation failure

	let userDetails = {
		firstName,
		lastName,
		email,
		password,
		phone
	}

	DB_USERS.push(userDetails)
	signupSuccessAlert.style.display = 'block'

	console.log(DB_USERS)

	resetSignupFields()
}

const login = () => {
	let enteredEmail = document.getElementById('login-email').value
	let enteredPassword = document.getElementById('login-password').value

	let loginSuccessAlert = document.getElementById('login-alert-success')
	let loginFailureAlert = document.getElementById('login-alert-failure')

	let currentUser =  DB_USERS.find(user => user.email === enteredEmail && user.password === enteredPassword)
	if(currentUser) {
		loginSuccessAlert.style.display = 'block'
		loginFailureAlert.style.display = 'none'
	} else {
		loginFailureAlert.style.display = 'block'
		loginSuccessAlert.style.display = 'none'
	}

	resetLoginFields()
}

/*
		find() -> Return a condition to find the element; If value exists, returns the value; else, returns undefined

		2 steps:
		1. Check whether the email (user) exits in the DB.
		2. Whether entered password matches with saved password for that user.
*/