/*
Autor: Hector Abraham Valdivieso Cosgalla
Entrada: Un numero n
Salida: La suma de los primeros n pares
Procedimiento: Se lee un numero n y se suman sus primeros n pares
*/
var n = prompt("ingresa el numero limite de sumas:");
SumaNPares(n);

function SumaNPares(n){
  var suma=0;
  for (var i = 0; i <= n; i= i + 2) {
    suma = suma + i
  }
  alert("La suma de los primeros " + n + " pares es: " + suma)
}