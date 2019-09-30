function arraySum(arr){
	const b = a.toString().split(',');
	let sum = 0;
	for(let i = 0; i<b.length; i++){
		sum += Number.isNaN(Number(b[i])) ? 0 : Number(b[i]);
	}
	return sum;
}

const a = [1, [2, [3]], 4, [5, '9']];
// console.log(sum);
console.log(arraySum(a)); 