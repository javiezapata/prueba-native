/*  Dada una lista de números enteros, ordene e imprima la lista de menor a mayor.
*/
/////////////


let lista ="3,345,34,34,1,567,87,65,46,36,5,3,2,23,4,23" //lista de numeros

lista=lista.split(",")

lista.sort(function(a, b){return a - b})  // sort() puede ordenar valores negativos, cero y positivos en el orden correcto.
                                        // Cuando compara dos valores, los envía a nuestra función de
                                        // comparación y luego ordena los valores de acuerdo al resultado devuelto.
console.log(lista)



