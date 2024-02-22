/* Le voy a preguntar el precio de un producto al usuario y le voy a devolver el precio final
con el IVA. Es decir, al precio del producto le agrego el 21%. Y devuelvo en un alert el
precio final.
2) Calcular el área y el perímetro de un cuadrado. Tenemos que preguntarle al usuario
cuanto mide el lado. Recuerden que para calcular el perímetro es la suma de todos sus
lados y el área del cuadrado es (Lado) al cuadrado.
3) Vamos a pedirle al usuario que ingrese 3 notas y calculamos el promedio. Recordá que
para calcular el promedio se suman las notas y se dividen por la cantidad de notas, es este
caso 3.
4) Le pedimos al usuario un número entero y debemos decirle si es par o impar.

let precioProducto = prompt("Ingrese el precio del producto");
let precioFinal = parseFloat(precioProducto) + (parseFloat(precioProducto) *
0.21);
alert("El precio final del producto es=" + precioFinal);

let lado=prompt("ingrese un lado de un cuadrado en cm");
let area= parseFloat(lado)* parseFloat(lado);
let perímetro=parseFloat(lado) * 4;
alert("el area del cuadrado es "+ area);
alert("el perimetro del cuadrado es "+ perímetro);

let nota1=prompt("ingrese una nota")
let nota2=prompt("ingrese otra nota")
let nota3=prompt("ingrese otra nota")
let resutaltado= (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
alert("tu promedio es " + resutaltado)



let numero=parseInt(prompt("ingrese un numero"));
if( numero % 2 == 0){
    alert(" tu numero "+ numero + " es par");
}else{
    alert("tu numero es impar")
}
*/
//como crear un booton que cuente clicks
let boton =document.getElementById("boton");
boton.addEventListener("click",function(){
    alert("hiciste click en este boton")});