// function validParentheses(str){
// 	const stack = [], open = ['(', '{', '['], close = [')', '}', ']'];

// 	for (var i = 0; i < str.length; i++) {
// 		if (open.includes(str[i])) {
// 			stack.push(str[i]);
// 		} else {
// 			if (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
// 				stack.pop();
// 			} else {
// 				return false;
// 			}
// 		}
// 	}	
// 	return stack.length === 0;
// }

var a = [1,2,3];

// console.log(validParentheses(a));
function validParentheses(str){
	const close = [')', '}', ']'];
	for (var i = 0; i < str.length; i++){}

		console.log(close.indexOf(str[i]));
}

validParentheses(a);
