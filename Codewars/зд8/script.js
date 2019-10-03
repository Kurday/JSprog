// var countSheep = function (num){
//   let n = 1, str='';
//   while (n<=num) {
//     str+=n +" sheep..."
//     n++
//   }
//   return str
// }

// console.log(countSheep(23))

// Решение 2

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

console.log(countSheep(23))