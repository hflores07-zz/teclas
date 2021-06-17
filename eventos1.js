document.addEventListener("mouseup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
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

var colorcito = "blue";
var movimiento = 10;

function dibujarTeclado(evento) {

  console.log(evento);

  switch (evento.x == teclas.UP) {

    dibujarLineas(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;

  }


}
