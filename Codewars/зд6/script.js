// function spongeMeme(str){
// 	let res = '';
// 	for (var i = 0; i < str.length; i++) {
// 		res += (i%2) ? str[i].toLowerCase() : str[i].toUpperCase();
// 	}
// 	return res;
// }

// console.log(spongeMeme('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem, esse, nobis enim quisquam maiores earum tempore voluptates cumque quidem, laudantium est illo eius. Iure, ad a atque obcaecati perspiciatis.')); 

// function strfun(str){
// 	const arr = str.split('');
// 	let a = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === 'X' || arr[i] === 'x') a=a+1;
// 		else if (arr[i] === 'O' || arr[i] === 'o') a=a-1;
// 		// if (a<0) return false 
// 	}
//  if (a === 0) return true
//  	else return false;
// }

// console.log(strfun('OX'));


//Вариант 2
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return ( x && x.length) === (o && o.length);
  
// }

// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     return a.length === b.length;
// }
// console.log( XO('xxOo'));

//Вариант 3
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

