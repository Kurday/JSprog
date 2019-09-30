var a = [1,2,3,4];

function arrPlus(arr){
	var num = 0;
	for (var i = 0; i < arr.length; i++) {
		 num +=1;
	}
	// return num;

	if (num>3) {arr.push(arr[i-1])}
		return arr.pop(2);
}

console.log(arrPlus(a));