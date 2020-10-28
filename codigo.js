var numeros = prompt("Favro de introducir un número, para obtener el factorial obtenido");
var resultados = 1;

for(var i=1; i<=numeros; i++) {
  resultados *= i;
}
alert("El resultado de :"+ numeros + " es = "+ resultados);