var form = document.querySelector('.formWithValidation')

var btn = form.querySelector('.validateBtn')
var login = form.querySelector('.login')
var password = form.querySelector('.password')
var passwordConfirmation = form.querySelector('.passwordConfirmation')

var fields = form.querySelectorAll('.field')



var generateError = function(text){
	var error = document.createElement('div')
	error.className = 'error'
	error.style.color = 'red'
	error.style.position = 'absolute'
	error.innerHTML = text
	return error
}

var removeValidation = function(){
	var errors = form.querySelectorAll('.error')
	for (var i = 0; i < errors.length; i++) {
		errors[i].remove()
	}
}

var checkFields = function (){

	for (var i = 0; i < fields.length; i++) {
		if (!fields[i].value) {
			
			var error = generateError('Cannot be blank')
			form[i].parentElement.insertBefore(error, fields[i])
		}
	}
}

var checkPasswordMatch = function(){
	if (password.value !== passwordConfirmation.value) {
		var error = generateError('password doesnt match')
		password.parentElement.insertBefore(error, password)
	}
}





btn.onclick = btnClick;

function btnClick(){
	removeValidation()
	checkFields();
	checkPasswordMatch();
	return false;
}


