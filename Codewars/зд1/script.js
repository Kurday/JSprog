function arraySimilar(arr1, arr2){
 return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

const a = [1, 2]
const b = [1, 2]
console.log( arraySimilar(a, b));