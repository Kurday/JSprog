function distinct(a){
	return [...new Set(a)];
}

console.log(distinct([1,1,2,2,3,3]));




// Способ 2
// function distinct(a){
// 	const items = {};
// 	const res = [];

// 	for (var i = 0; i < a.length; i++) {
// 		if(!items[a[i]]) {
// 			res.push(a[i]);
// 			items[a[i]] = true;
// 		}
// 	}
// 	return res;
// }
// var arr = [1,2,3]
// console.log(distinct([1,2,2,3,1]));


// Способ 3
// function unique(arr) {
//   var obj = {};

//   for (var i = 0; i < arr.length; i++) {
//     var str = arr[i];
//     obj[str] = true; // запомнить строку в виде свойства объекта
//   }

//   return Object.keys(obj); // или собрать ключи перебором для IE8-
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// alert( unique(strings) ); // кришна, харе, 8-()