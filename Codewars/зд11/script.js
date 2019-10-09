const matrix = [
	[1, 4, 8, 9,],
	[6, 2, 11, 1,],
	[8, 0, 3, -5,],
	[-2, 10, 8, 1]
];

matrix.forEach(function(row, outerIndex){
 row.forEach(function(num, innerIndex){
 	if (innerIndex < outerIndex) {
 		console.log(num);
 	} else {
 		return;
 	}
 });
});



