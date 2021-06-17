var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;
dibujarLineas("red", 149, 149, 151, 151, papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var colorcito="blue";
var movimiento=10;

function dibujarTeclado(evento){
  if(evento.keyCode==teclas.UP){

    dibujarLineas(colorcito,x,y,x,y-movimiento,papel);
    y=y-movimiento;

  }

  if(evento.keyCode==teclas.DOWN){
    dibujarLineas(colorcito, x, y, x, y + movimiento,papel);
    y = y + movimiento;

  }

  if(evento.keyCode==teclas.LEFT){
    dibujarLineas(colorcito, x, y, x-movimiento, y,papel);
    x = x - movimiento;
  }

  if(evento.keyCode==teclas.RIGHT){
    dibujarLineas(colorcito, x, y, x+movimiento, y,papel);
    x = x+ movimiento;
  }

  }
