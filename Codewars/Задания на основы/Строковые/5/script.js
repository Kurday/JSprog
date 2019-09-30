var students = ["Илья","Greg", "Алина"];

for (var i = 0; i < students.length; i++) {
  for (var j = 0; j < students[i].length; j++) {
    if (students[i].charCodeAt(j) < 1040 || students[i].charCodeAt(j) > 1103) {
      console.log("Этот символ Не русский "+students[i].charAt(j)+"  в эдементе "+ students[i]);
    }
  }
}