var z=10;
var i;
var no=false;
document.getElementById('a').addEventListener('click', function() {
no = !no
if(no === true) {
  i = setInterval(function() {
    if (z===0) {
      no=true;


    }
    if (z > 0) {
    if (no===true) {
      z--;
    }
    }
    document.getElementById('c').textContent=z;


  }, 1000)
  }
  if (no===false) {
    clearInterval(i);
  }
});
document.getElementById('b').addEventListener('click', function() {
z=10;
no=false;



clearInterval(i);
document.getElementById('c').textContent=z
});
