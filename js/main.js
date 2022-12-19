var carne;
var toppings;
var papas;
var preciototal=0;
var tiempototal=0;

carne= prompt("ingrese el tipo de carne deseado: ");
toppings= prompt("ingrese el numero de toppings deseado: ");
papas= prompt("¿quiere papas fritas? ingrese si o no: ");

/* if(papas =="si"){
    preciototal += 300;
    tiempototal += 20;
}

for (var i = 0; i <= toppings; i+20) {
preciototal += i;
} */

alert("tipo de carne elegida:" + carne);
alert("el precio total sera:" + preciototal);
alert("el tiempo de preparacion del pedido sera: " + tiempototal + " minutos");