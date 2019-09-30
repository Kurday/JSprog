// var test = "Вот мы и приехали";
// var regV = /мы/;
// var result = test.search(regV);
// console.log(result);

// var myindex = "450000";
// var regV = /\d\d\d\d\d\d/;
// var result = myindex.search(regV);
// console.log(result);

var myindex = "450000";
var regV = /\d{6}/;
var result = myindex.search(regV);
console.log(result);