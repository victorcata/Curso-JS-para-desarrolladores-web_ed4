# Clase 2

**Ejercicios**
> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)

1 - Quiero saber del total de trenes cuantos hay operativos.
    El formato de la respuesta es *"x de x funcionando hoy"*.

```javascript
    var primerTren = 8;
    var segundoTren = 12;
    var trenes = function(primerTren, segundoTren) {
        return console.log(primerTren +' de ' + segundoTren + ' trenes funcionando hoy.')
    }
```

- Respuesta esperada (consola):

```
    8 de 12 trenes funcionando hoy.
```


2 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada (sin bucles).

```javascript
    var tren1 = 1;
    var tren2 = 2;
    var tren3 = 3;
    var tren4 = 4;
    var tren5 = 5;
    var tren6 = 6;
    var tren7 = 7;
    var tren8 = 8;

    var trenFuncionando = function(tren) {
        return console.log('El tren numero '+ tren +' esta funcionando');
    }

    trenFuncionando(tren1);
    trenFuncionando(tren2);
    trenFuncionando(tren3);
    trenFuncionando(tren4);
    trenFuncionando(tren5);
    trenFuncionando(tren6);
    trenFuncionando(tren7);
    trenFuncionando(tren8);
```

- Respuesta esperada (consola):

```
    El tren numero 1 esta funcionando
    El tren numero 2 esta funcionando
    El tren numero 3 esta funcionando
    El tren numero 4 esta funcionando
    El tren numero 5 esta funcionando
    El tren numero 6 esta funcionando
    El tren numero 7 esta funcionando
    El tren numero 8 esta funcionando
```


3 - Refactoriza... usando *while*.

```javascript
    var tren = 1;
    while (tren <= 8) {
        console.log('El tren numero '+ tren +' esta funcionando');
        tren++;
    }
```


4 - Refactoriza.. usando *Do... While*.

```javascript
    // Tu solución
```


5 - Refactoriza.. usando *for*.

```javascript
    for (var i = 1; i <= 8; i++) {
        console.log('El tren numero '+ i +' esta funcionando');
        tren++;
    }
```



6 - Del total de trenes... ¿cuantos tengo parados?

```javascript
    // Tu solución
```

- Respuesta esperada (consola):

```
    El tren numero 9 esta parado
    El tren numero 10 esta parado
    El tren numero 11 esta parado
    El tren numero 12 esta parado
```


7 - Refactoricemos y juntemos los dos bucles dentro de una misma función. Así se imprime por consola tanto los trenes que estan funcionanado como los que estan parados

```javascript
    // Tu solución
```

- Respuesta esperada (consola):

```
    El tren numero 1 esta funcionando
    El tren numero 2 esta funcionando
    El tren numero 3 esta funcionando
    El tren numero 4 esta funcionando
    El tren numero 5 esta funcionando
    El tren numero 6 esta funcionando
    El tren numero 7 esta funcionando
    El tren numero 8 esta funcionando
    El tren numero 9 esta parado
    El tren numero 10 esta parado
    El tren numero 11 esta parado
    El tren numero 12 esta parado
```


**If... else**

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


**Else if...**

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```


**AND(&&)**

Elemento 1 | Elemento 2 | Resultado
------------ | ------------- | -------------
true | true | true
true | false | false
false | false | false
false | true | false


**OR(||)**

Elemento 1 | Elemento 2 | Resultado
------------ | ------------- | -------------
true | true | true
true | false | true
false | false | false
false | true | true


```javascript
var ex1 = true && true; // true
var ex2 = (2 == 2) && (3 >= 6); // false
var ex3 = (2>3) || (17 <= 40); // true
var ex4 = false || false; // false

function condicionalAvanzado ( paraComparar ) {
    if (paraComparar) {
        console.log("Verdadero!");
    } else {
        console.log("falso!");
    };
};
```


**Interacción Básica con el Usuario**

- alert():
    ```javascript
    alert("¡Bienvenido a esta web!");
    ```

- confirm():
    ```javascript
    confirm("¿Esta seguro que desea abandonar esta web?");
    ```


- Ejemplo:
    ```javascript
    var respuesta = confirm("presiona un botón!");
    if (respuesta === true) {
        console.log("Has aceptado!");
    } else {
        console.log("Has cancelado");
    }
    ```

- prompt():
    ```javascript
    prompt("¿Como te llamas?");
    ```

- Registremos los datos en una variable:
    ```javascript
    var nombre = prompt("¿Como te llamas?");
    ```


**Arrays**

- Creando un array:
    ```javascript
    var arreglo = [];
    arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
    arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
    arreglo[0] = "fresa";
    arreglo[4] = "pera";
    arreglo[2] = "limón";
    ```

- Índice total:
    ```javascript
    arreglo.length;
    ```

- .push() *Añadir elemento al índice*:
    ```javascript
    arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    arreglo.shift();
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

- .splice() *Borrar*:
    ```javascript
    var manzana = arreglo.splice(3, 1);
    ```

- .map():
    ```javascript
    var arreglo = ["plátano", "fresa", "lima", "manzana"];
    var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
    console.log(resultado);
    ```



**Arreglos avanzados**
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```


**Ejercicios**

8 - **#simplifiquemos!** Quiero solo un bucle para todo.

```javascript
    // Tu solución
```

9 - **#compliquemos!** Servicio nocturno en el tren 10.
*Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.*

```javascript
    // Tu solución
```


10 - Refactoricemos - ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.

```javascript
    // Tu solución
```

11 - El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo.
El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

```javascript
    // Tu solución
```


12 - El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados.
 El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados.
 Este tren será el número 3.

*NOTA: EL TREN 3 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código*

```javascript
    // Tu solución
```



**Funciones**

- Propiedad *name*:
    ```javascript
	function miFuncion (){
		// vacia
	};

	console.log(miFuncion.name);
    ```


- Declaración y ejecución:
    ```javascript
	function dameTrue (){
		return true
	};

	function dameFalse () {
		return false
	};

	dameTrue();
	dameFalse();
    ```

- Invocación e introducción a *this*:
	- como función (*this* contexto *window*)
		```javascript
		function ambitoGlobal () {
			return this;
		}

		ambitoGlobal()
		```
	- como método en un objeto (*this* contexto objeto al que pertenece el método)
		```javascript
		var objeto = {};

		objeto.miMetodo = function () {
			return this;
		}

		objeto.miMetodo();
		```		
	- como constructor de un objeto (*this* contexto objeto creado)
	- .apply() y .call() (modificación explícita de *this*)

- Argumentos:
	- El exceso de argumentos no es un problema
	- La falta de argumento crea un valor indefinido
    - El Objeto Arguments no es un Array, solo es similar.
    ```javascript    

	function pruebaArguemntos () {
	console.log(arguments);
	console.info(arguments[0]);
	console.info(arguments[1]);
	}

	pruebaArguemntos (1, "vale", true);

	```


- [Objeto Arguments](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/arguments)


- Sumar cuadrados.

```javascript
	function sumaCuadrados (a, b) {
		return (a*a) + (b*b);
	};
```



**Funciones (Scope)**

- Declaración y ejecución:
    ```javascript
	var numero = 450;
	var otroNumero = 23;

	function sumaCuadrados (a, b) {
		var numero = a;
		var otroNumero = b;
		var calculo = (numero*numero) + (otroNumero*otroNumero);
		console.log("\"numero\" es \""+numero+"\", local");
		console.log("\"otroNumero\" es \""+otroNumero+"\", local");
	};

	function verificarGlobales() {
		console.log("\"numero\" es \""+numero+"\", global");
		console.log("\"otroNumero\" es \""+otroNumero+"\", global");
	};
    ```


**Atacando la lógica**

- Divide y venceras (determina la estructura de afuera hacia dentro)
    ![Divide et impera](http://orig12.deviantart.net/467f/f/2009/257/9/9/divide_y_venceras___cesar_by_horusart.jpg)

- Los comentarios son tu aliado.

- [Introduction to Pseudocode de Damian Gordon](http://www.slideshare.net/DamianGordon1/pseudocode-10373156?qid=2ccda58e-4c14-4685-ba31-2b3ae9196e4a&v=qf1&b=&from_search=1)
    ![ejemplo_pseudocodigo](http://rockbotic.com/wp-content/uploads/2014/01/pseudocodigo-para-dormir.jpg)

- [Blocky](https://blockly-demo.appspot.com/static/demos/code/index.html?lang=es)
    - Exportación en PHP, JS, Python, etc...
    - Verificación de la lógica
    - [Opensource](https://github.com/google/blockly)


**Funciones (Avanzadas)**

- Anónimas (expresiones):
    ```javascript
	var sumaCuadrados = function (a, b) {
		return (a*a) + (b*b);
	};

    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
    ```

- Funciones como dato:
    ```javascript
	function saludo () {
		console.log("hola!");
	};

	function lanzar (funcion){
		funcion();
	};
    ```

- Funciones anónimas autoejecutables:
    ```javascript
	(function() {
		console.log("hola Amigo/a")

	}) (); //ex:Jquery
    ```


- Funciones anónimas con parámetros:
    ```javascript
	( function(quien){
	   console.log("hola " + quien);
	})("Amigo/a");
    ```


- Función que devuelve una función anónima:
	- Asignando una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                alert("hola " + quien);
	        }
	}
	var saluda = saludo("Amigo/a");
	saluda();
    ```

	- Sin asignar una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                alert("hola " + quien);
	        }
	}
	saludo("Amigo/a")();
    ```


**Funciones (Anidación)**

- Anidación:
    ```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	var saluda = saludar("Amigo/a");
	saluda();
    ```

- Anidación:
    ```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	saludar("Amigo/a")();
    ```

**Funciones (recursión)**

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).

    ```javascript
		function factorial(n){
		   if(n <= 1)
		      return 1
		   else
		      return n * factorial(n-1)
		}

		factorial(0); // n! = 1
		factorial(1); // n! = 1
		factorial(2); // n! = 2
		factorial(3); // n! = 6 (3*2*1)
		factorial(4); // n! = 24 (4*3*2*1)
		factorial(5); // n! = 120 (5*4*3*2*1)
		factorial(6); // n! = 720 (...)
		// ...
    ```


- Saber si hoy es un día par o impar.

```javascript
	var miDiaEs = function() {
	    if (new Date().getDate() % 2 == 0) {
	        console.info("hoy es un día par");
	    } else {
	        console.info("hoy es un día impar");
	    }
	}
	miDiaEs();
```



**Funciones (Closures)**

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.

> No es aconsejable crear innecesariamente funciones dentro de otras funciones si no se necesitan los closures para una tarea particular ya que afectará negativamente el rendimiento del script tanto en consumo de memoria como en velocidad de procesamiento.
> [Closures MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- Fábrica de función:
    ```javascript
	function sumador(x) {
	  return function(y) {
	    return x + y;
	  };
	}

	var sum1 = sumador(10); //Closure
	var sum2 = sumador(30);	//Closure

	console.log(sum1(2)); // Devuelve 12
	console.log(sum2(2)); // Devuelve 32
	console.log(sumador(20)(2)); //Devuelve 22
    ```

- Otro ejemplo, ahora temporizado:
    ```javascript
	function saludar(segundos){
		var hola = "Hola, Hola!";

		setTimeout(function(){
			console.info(hola);
		},segundos*1000);
	}

	saludar(2);
    ```

- Otro ejemplo... más útil:
    ```javascript
      var varGlobal = "Soy un dato Global";
      var burbuja;

      function nivel1() {
        var varInterna = "Soy un dato interno. -> nivel1";

        function nivel2() {
          console.log("Estoy dentro de la funcion -> nivel2")
          console.log("Estoy dentro de la funcion -> nivel2 y puedo acceder al nivel1: "+varInterna)
        }

        burbuja = nivel2;

      }

      nivel1();

      burbuja();
      console.log("Burbuja recuerda su contexto original")
    ```


**Switch**

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- Casos únicos:
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- Multiples coincidencias:
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```


**Ejercicios**

13 - Hagamos una lista de pasajeros (min. 6)

```javascript
    // Tu solución
```


14 - Hagamos una lista de pasajeros efectiva usando Arrays

```javascript
    // Tu solución
```


15 - Imprimamos cada pasajero de la lista y su número de asiento (basado en el orden del índice).
*Nota: El primer asiento del tren es el 1 y no el 0.*

```javascript
    // Tu solución
```

- Respuesta esperada (consola):

```
	El pasajero Alicia Gutierrez tiene reservado el asiento 1
	El pasajero Alfonso Gomez tiene reservado el asiento 2
	El pasajero Luis Navarro tiene reservado el asiento 3
	El pasajero Oscar Garcia tiene reservado el asiento 4
	El pasajero Andres Fernandez tiene reservado el asiento 5
	El pasajero Lucia Mellado tiene reservado el asiento 6
```


16 - Necesitamos una función para agregar y otra para borrar pasajeros de la lista.
*Nota: Pensemos que a la larga pueden existir más listas.*

```javascript
    // Tu solución
```


17 - La compañía de trenes ha decidido que los viajeros podrán reservar el asiento asignado, pero quiere evitar que los pasajeros cambien de asiento constantemente cuando se anula un o varios billetes.
*Nota: Al borrar en el ejercicio anterior las posiciones de los pasajeros cambiaban y los billetes quedaban desactualizados.*

```javascript
    // Tu solución

```


18 - Una de las vías principales esta en obras. Así que nuestra compañía decidió usar antiguas vías para hacer transbordos directos entre las estaciones afectadas.

Nuestra Misión es añadir el tiempo estimado en los billetes para las estaciones afectadas Tetuán,
Moncloa y Hortaleza. Es necesario incluir un texto informativo y el nombre del usuario también en el billete.

*Nota: Intenta utilizar Closures*

Info: 	
	- Tetuán (12)
   	- Moncloa (19)
   	- Hortaleza (21)

```javascript
    // Tu solución
```


**Funciones (Callbacks)**

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
    ```javascript
	var quieroCallback = function(parametro, callback){
	    if ((callback) && (typeof callback === 'function')){
	        callback(parametro);
	    }
	    else
	        console.log(parametro, callback);
	}

	quieroCallback('a', 'b');

	quieroCallback('a', function(val){
	    console.log(val);
	});
    ```


- Ejemplo con Jquery:
    ```javascript
    $('#elemento').fadeIn('slow', function() {
    	// código del callback
	});
    ```


- Otro ejemplo:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    callback();
	}

	comerSandwich('jamón', 'queso', function() {
	    console.info('Ya terminé...');
	});
    ```


- Ejemplo con Callback opcional:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);

	    if (callback) {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
    ```


- Sanitizar el Callback:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);

	    if (callback && typeof(callback) === "function") {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
    ```


- Asincronia:
    ```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);

		setTimeout(alarma, 5000);
		function alarma(){
			console.log("ring! ring!.. pasaron los 5 segundos!");
		};


	    if (callback && typeof(callback) === "function") {
	        callback();
	    }
	}

	comerSandwich('jamón', 'queso', function() {
	    console.log('Ya terminé...');
	});
    ```


- Más información:
	- [Callback Functions in JavaScript de Louis Lazaris](http://www.impressivewebs.com/callback-functions-javascript/)
	- [Creando y utilizando callbacks de Pablo Novas en fernetjs](https://fernetjs.com/2011/12/creando-y-utilizando-callbacks/)



**Ejercicios**

19 - Necesitamos saber cuantos pasajeros están utilizando cada una de estas rutas temporales, para ellos la empresa decide añadir un numero de billete para cada pasajero.  El número de billete tiene que seguir una estructura fija.

*Nota: El formato del número de billete deseado:
- (Inicial de la estación)(número de viajero) -> H1 (Hortaleza 1), T120 (Tetuan 120), M110 (Moncloa 110), etc...*

```javascript
    // Tu solución

```


20 - Gracias al ejercicio anterior, hemos podido saber a groso modo cuantos pasajeros van en cada línea.

La empresa considera que con estos datos, usará trenes con menos vagones que le permitirán transportar a los pasajeros en menos tiempo.

Pero existe el riesgo de dejar pasajeros esperando mucho tiempo.

Así que haremos una nueva función que avise al revisor cuando no quede sitio en el próximo tren.

El revisor del tren debe repartir tickets restaurante a los pasajeros para que puedan tomar una consumición gratis en la cafetería de la estación, si no tienen sitio en el próximo tren.

*Nota: La linea es única y el mismo tren cubre todo el trayecto.*

```javascript
    // Tu solución
```


**Objetos Literales**

- Propiedades:
    ```javascript
	var miObjeto = {
	    cadena: 'esto es una cadena',
	    numero: 2,
	    booleano: false
	};
	```


- Métodos:
    ```javascript
	var miObjeto = {
	    saludar: function(){
			console.log("hola!");
		}
	};
	```

- Trabajando con espacios y caracteres especiales:
    ```javascript
	var miObjeto = {
		nombre: "objeto",
	    "año": 2015,
	    "estado del sistema": "correcto"
	};

	console.log(miObjeto["año"]);
	miObjeto["estado del sistema"] = "fuera de servicio";
	console.log(miObjeto["estado del sistema"]);
	```

- Acortar objetos:

    ```javascript
	var objetoAbreviado = objeto.muy.muy.largo.que.tiene.muchos["metodos y propiedades"];

	objetoAbreviado.propiedad1;
	objetoAbreviado.metodo1();

	```


**Ejercicios Repaso - Cajero Automático**
![cajero automatico](http://rack.1.mshcdn.com/media/ZgkyMDE0LzAyLzI2L2YwL0JpdGNvaW5fQVRNLmJjN2IxLmpwZwpwCXRodW1iCTEyMDB4NjI3IwplCWpwZw/bdee5162/0fe/Bitcoin_ATM.jpg)

1 - Definimos el objeto

```javascript
	// Tu solución
```

2 - Añadimos detalles básicos(clientes y propiedades)

```javascript
    // Tu solución
```


3 - Añadimos detalles adicionales (volumen)

```javascript
    // Tu solución
```


4 - Añadimos funciones para quitar y añadir clientes

```javascript
    // Tu solución

```


5 - Añadimos una propiedad para contabilizar las operaciones realizadas

```javascript
    // Tu solución
```


6 - Creamos una función para eliminar una propiedad si no contiene cierta cantidad de datos.
*Nota: borrandoDatosVacios (objeto, propiedad, valorMinimo)*

```javascript
    // Tu solución
```


7 - Añadimos funciones de control de operaciones (contabilizar operaciones realizadas y fallidas) y funciones de administracción (agregar y quitar dinero)

```javascript
    // Tu solución
```


8 - Añadimos funciones para operaciones económicas y verificación de los clientes

```javascript
    // Tu solución
```


9 - Creamos un log detallado y una cuenta total

```javascript
    // Tu solución
```


10 - Refactorizamos y dejamos todo preparado para incluirlo en nuestro html, usando lo que hemos aprendido.
	Evitando tambien que las funciones puedan ser accedidas desde la consola u otras librerias.

```javascript
    // Tu solución
```

11 (opcional) - Integrarlo con el html y bloquea el uso del de las funciones por consola

```javascript
	// Ejercicio Opcional
```