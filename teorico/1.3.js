/*1.3. Dada una lista de números enteros, imprima cuál es el menor de los números de
la lista.*/
////////////////////////////////////////


let lista ="3,345,34,34,1,567,87,65,46,36,5,3,2,23,4,23" //lista de numeros

lista=lista.split(",")

let aux=lista[0] //varibale auxiliar que toma el primer valor de la lista
for (let i=0; i<lista.length; i++){  //iniciamos un ciclo para recorrer cada elemento
    if(aux>lista[i+1]){         //condicional para verificar si el numero siguiente es menor en caso de serlo aux tomara ese valor
        aux=lista[i+1] //aux toma el valor
    }
}

console.log(aux)    //impresion por consola
