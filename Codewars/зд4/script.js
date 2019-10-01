function validParentheses(str){
	const stack = [], open = ['(', '{', '['], close = [')', '}', ']'];

	for (var i = 0; i < str.length; i++) {
		if (open.includes(str[i])) {
			stack.push(str[i]);
		} else {
			if (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
				stack.pop();
			} else {
				return false;
			}
		}
	}	
	return stack.length === 0;
}

var b = ['(',')'];
// console.log(validParentheses(a));

function validParentheses(str){
	const arr = str.split('');
	let a = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === '(') a=a+1;
		else if (arr[i] === ')') a=a-1;
		if (a<0) return false;
	}
	if (a === 0) return true;
	else return false;
}

console.log(validParentheses('(',')')); 


