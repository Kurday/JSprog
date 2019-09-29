window.onload = function() {
  var btn1 = document.querySelector('input[name=btn1]');
  var btn2 = document.querySelector('input[name=btn2]');


  function OurJquery() {
    this.btnClick1 = function(elem, fun) {
      elem.addEventListener('click', fun);
    }
    this.btnClick2 = function(elem, event, fun) {
      elem.addEventListener(event, fun);
    }
  };

  var Click1 = new OurJquery;
  Click1.btnClick1(btn1, function() {
    console.log('neo')
  });

  var Click2 = new OurJquery;
  Click2.btnClick2(btn2, "click", function() {
    console.log('morf')
  });

}