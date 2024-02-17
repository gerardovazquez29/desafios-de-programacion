# Lenguaje de Programacion

* un lenguaje de programacion, es un conjunto de reglas y simbolos que permiten
 al programador comunicarse con la computadora. 
con este lenguaje podemos darle instrucciones para que realice tareas especificas.
existen varios lenguajes, cada uno diseñado con propositos y caracteristicas especificas.
estos lenguajes son

    * C
    * C++
    * C#
    * Python
    * Java
    * JavaScript
    * PHP

## Estructura de Datos

Una estructura de datos es una forma de organizar y almacenar datos en una computadora
de manera eficiente para que puedan ser manipulados y poder acceder a ellos facilmente.

* En las estructuras de datos incluyen:

1. Arreglos(Arrays)
2. Listas Enlazadas(Linked Lists)
3. Pilas(Stacks)
4. Colas(Queues)
5. Arboles(Trees)
6. Grafos(Graphs)
7. bucle

* arreglos en JavaScripts
~~~javaScript
let miArreglo = [1, 2, 3, 4];

miArreglo[2] = 10;

console.log(miArreglo); //* Salida: [1, 2, 10, 4]
~~~

* Lista Enlazada
~~~javaScript
//* Definición del nodo de la lista enlazada
class Node {
  constructor(data) {
    this.data = data; // Valor del nodo
    this.next = null; // Referencia al siguiente nodo
  }
}

//* Definición de la lista enlazada
class LinkedList {
  constructor() {
    this.head = null; // Puntero al primer nodo de la lista
    this.size = 0;    // Tamaño de la lista
  }

  // Método para agregar un nuevo nodo al final de la lista
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Método para imprimir los valores de la lista enlazada
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Ejemplo de uso
const listaEnlazada = new LinkedList();
listaEnlazada.add(1);
listaEnlazada.add(2);
listaEnlazada.add(3);

listaEnlazada.print(); // Salida: 1 -> 2 -> 3 -> null
~~~

