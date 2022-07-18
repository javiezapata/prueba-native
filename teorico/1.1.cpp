// Explique que es un puntero y cómo funciona.
/////////////////////////////////////////////////

// Un puntero es una variable que contiene la dirección de otra variable.
//para asignar nuevos objetos en el montón,
//para pasar funciones a otras funciones
//para iterar los elementos de matrices u otras estructuras de datos.


#include "iostream"
#include "stdio.h"

using namespace std;

int funcion(int valor)
{
    valor = valor + 10; //Se le suma 10
    return valor;
}

int funcionPunteros(int* valor)
{
    *valor = *valor + 10; //Se le suma 10 a la posición en memoria
    return *valor;
}

int main()
{
    int numero = 10;

    cout << "Antes de funcion " << numero << "\n"; //10

    funcion(numero); //Se pasa por valor

    cout << "Despues de funcion " << numero << "\n"; //10

    cout << "Antes de funcionPunteros " << numero << "\n"; //10

    funcionPunteros(&numero); //Se envía la dirección de memoria y la función resuelve la referencia

    cout << "Despues de funcionPunteros " << numero << "\n"; //20 (10+10)

    system("pause");

    return 0;
}