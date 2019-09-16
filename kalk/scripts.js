window.onload = function(e){

// Функция с оператором выбора
function show(x,y,op){
 // Локальная переменная
 var msg
 // Проверяется значение аргумента
 switch(op){
 case "sum": // Первый блок
 msg=x+" + "+ y+" = "+(x+y)
 break
 case "ras": //Второй блок
 msg=x+" - "+ y+" = "+(x-y)
 break
 case "pros": 
 msg=x+" * "+ y+" = "+(x*y)
 break
 case "chas": // 
 msg=x+" / "+ y+" = "+(x/y)
 break
 default: 
 msg="<b>"+op+"</b> - неизвестная операция <br>"
}
return msg;
}

var mainBtn = document.querySelector('.mainBtn');
var span = document.querySelector('.res');
var inp1 = document.querySelector('input[name=num1]');
var inp2 = document.querySelector('input[name=num2]');

var btn = document.querySelectorAll('.operation .boot')

for(var i = 0; i < btn.length; i++) {
	btn[i].onclick = btnClick;	
}


//функция для кнопок в массиве
function btnClick(e){
	var x1 = parseInt(inp1.value);
	var y1 = parseInt(inp2.value);

	var make = this.getAttribute('name');
	span.innerHTML = show(x1,y1,make);

	//this.setAttribute('disabled','disabled');
	this.disabled = true;
}

//вызываем функцию btnEnable для события текст-инпутов
inp1.oninput = btnEnable;
inp2.oninput = btnEnable;

//функция для активации кнопки путем изменений полей инпут текст
function btnEnable(){
for(var i = 0; i < btn.length; i++) {
	btn[i].disabled = false;
}
	mainBtn.disabled = false;
}

//Код для отдельной кнопки не попадающей в массив кнопок
mainBtn.onclick = function(){
	var res = parseInt(inp1.value) + parseInt(inp2.value);
	span.innerHTML = res;
	this.disabled = true;

}

}