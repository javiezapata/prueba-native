/* Dada una lista de números enteros, imprima cuál es la suma de los números al
cuadrado */
///////////////////7

let lista ="3,345,34,34,1,567,87,65,46,36,5,3,2,23,4,23" //lista de numeros

lista=lista.split(",")

let aux=lista[0]*lista[0] //varibale auxiliar que toma el primer valor de la lista al cuadrado
for (let i=1; i<lista.length; i++){  //iniciamos un ciclo para recorrer cada elemento
   aux=lista[i]*lista[i]+aux  //tomamos el siguiente valor lo elevamos al cuadro y lo acumulamos a aux
   
}

console.log(aux)    //impresion por consola