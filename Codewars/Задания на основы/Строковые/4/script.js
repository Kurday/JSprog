var city = "Самара";
console.log(city.charAt(2));
console.log(city.charCodeAt(2));

var name = "Иваhiven";

var rusLetters = "аяАЯ";

// console.log(rusLetters.charCodeAt(0) + "<br>");
// console.log(rusLetters.charCodeAt(1) + "<br>");
// console.log(rusLetters.charCodeAt(2) + "<br>");
// console.log(rusLetters.charCodeAt(3) + "<br>");

// //наш диапазон кода русских букв 1040-1103

for (var i = 0; i< name.length; i++) {
  if (name.charCodeAt(i) < 1040 || name.charCodeAt(i) > 1103){
    console.log("Найден символ который не входит в диапазон русских символов. Это символ"+" "+name.charAt(i))
  }
}