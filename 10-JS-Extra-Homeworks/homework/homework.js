// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];

  array = Object.entries(objeto); //devuelve la clave y el valor en un array
  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var contador = {};

  for (var i of string) {
    if (contador[i]) {
      contador[i]++;
    } else [(contador[i] = 1)];
  }
  return contador;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = [];
  var start = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      //para saber si es mayuscula
      string.splice(start, 0, s[i]); // para separarlo que arranquqe en la posicion 0 y que termine en s[i]
      start++; //que se mueva de a un lugar
    } else {
      string.push(s[i]);
    }
  }
  return string.join(""); // para unir todo
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var string = [];

  for (i = 0; i < str.length; i++) {
    string.unshift(str[i]);
  }
  return string.join("").split(" ").reverse().join(" "); // join para que junte y no separe letra por letra. split para separar por palabras
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var alReves = numero.toString().split("").reverse().join("");

  alReves = parseInt(alReves); // parseInt transforma al string en numero

  if (numero === alReves) {
    return "Es capicua";
  }
  return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaModificada = "";
  let eliminar = ["a", "b", "c"];

  for (let i = 0; i < cadena.length; i++) {
    if (eliminar.includes(cadena[i])) continue; // includes verifica si existe el argumento. continue para que siga iterando sin hacer nada
    cadenaModificada = cadenaModificada + cadena[i];
  }
  return cadenaModificada;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let contador = 0;
  while (contador < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length < arr[i + 1].length) {
        // si la longitud de  arr[i] es menor a arr[i] en la posicion siguiente..
        let guardado = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = guardado;
      }
      contador++;
    }
  }
  return arr;
}
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let inter = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; i++) {
      if (arreglo1[i] === arreglo2[j]) {
        inter.push(arreglo1[i]);
      }
    }
  }
  return inter;
}
// otra forma:
// arrayInterseccion = arreglo1.filter(value => arreglo2.includes(value))
// return arrayInterseccion;

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
