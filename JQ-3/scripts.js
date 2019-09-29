    // var form = document.querySelector('form');
    // var inputs = document.querySelectorAll('input[type=text]');
    // form.onsubmit = submitForm;
    
    
    // function submitForm(e){
    //     var flag = 0;
    //     for(var i = 0; i < inputs.length; i++) {
    //         inputs[i].classList.remove('err');
    //         if(inputs[i].value == '') {
    //             inputs[i].placeholder = 'Заполните это поле!'
    //             inputs[i].classList.add('err');
    //             var err = true;
    //         }
    //     }
    //     if (err) {
    //         e.preventDefault();
    //     }
    // }

function $(selector){
    var elements = document.querySelectorAll(selector);
    return new OurJquery(elements);
}

var jqInputs = $('.item')
console.log(jqInputs);


function OurJquery(elements){
	this.elements = elements;

	this.on = function(eventname, f){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].addEventListener('eventname', f);		}
	}
}

// var jq = new OurJquery(inputs);

// jq.on('click', function(){
// 	this.classList.remove('err');
// });

// jq.on('focus', function(){
//     this.classList.remove('err');
// });

// jq.on('blur', function(){
//     this.classList.remove('err');
// });
