var estado=0; // estado del click
var colorLinea="blue"; //Color a la linea
var area= document.getElementById("area_de_dibujo");
var papel=area.getContext('2d');
var x; //guarda coordenada en x
var y; //guarda coordenada en y
document.addEventListener("mousedown",presionarMouse); //cuando presionas click
document.addEventListener("mouseup", soltarMouse); //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse); //cuando mueves el mouse

//dibujo del borde
dibujarLinea("red",0,0,300,0,papel);
dibujarLinea("red",300,0,300,300,papel);
dibujarLinea("red",300,300,0,300,papel);
dibujarLinea("red",0,300,0,0,papel);

//funcion para mouse move
function dibujarMouse(evento){
  if(estado==1) {
    //solo se dibujaría si está el click del mouse presionado
    dibujarLinea(colorLinea,x,y,evento.layerX,evento.layerY,papel);
  }

x=evento.layerX;
y=evento.layerY;
}

//funcion para mousedown
function presionarMouse(evento){
  estado=1; //click presionado
  x=evento.layerX;
  y=evento.layerY;

}

function soltarMouse(evento){
  estado=0; //click suelto
  x=evento.layerX;
  y=evento.layerY;
}

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal, lienzo){
  lienzo.beginPath(); //inicio de trazo
  lienzo.strokeStyle=color; //estilo de trazo
  lienzo.lineWidth=2; //ancho de linea de
  lienzo.moveTo(xinicial,yinicial); //donde comienza la linea
  lienzo.lineTo(xfinal,yfinal); //traza la linea ubica punto final
  lienzo.stroke(); //dibuja con el estilo del trazo
  lienzo.closePath(); //cierra el dibujo

}
