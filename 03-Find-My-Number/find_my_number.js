//insert your pseudocode below
/*
il computer pensa un numero da 1 a 100 
il user deve indovinare il numero 
mettendo il numero nella finestra 
quando il computer mette il numero e il user mette altro numer si dice se il numero più alto o più basso o uguale 
a il numero di computer 
alla fine si dice si
 
*/

//insert your code below
var i, num;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


i = Number(window.prompt('guess the number'));
num = mathRandomInt(1, 100);
while (num != i) {
  if (num > i) {
    i = Number(window.prompt('your number is a bigger '));
  }
  if (num < i) {
    i = Number(window.prompt('your number is smaller'));
  }
}
window.alert('congratulations!');

1 + 1;