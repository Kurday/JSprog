var forTesting = "8 пингвинов и 9 карасей.";

function numberTest(myString) {
  var regV = /^\d/;
  if (myString.search(regV) == -1){
    console.log('Строка начинается не с цифры');
  }
  else
  console.log('Строка начинается с цифры ');

}
numberTest(forTesting);