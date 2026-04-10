#  p5.js  

## Algoritmos 

* Secuencia de algo para resolver un problema.  
* Debe ser:  
    * Preciso: sin ambiguedades.
    * Ordenado: sigue uns secuencia lógica.  
    * Finito: tiene un inicio y final.  
    * Definido: mismos resultados con mismos datos.  

___

## Estructura de un algoritmo

* Input (Entrada): datos o materiales iniciales.
* Proceso: pasos que transforman la entrada.
* Output (Salida): resultado final.

Idea clave: Entrada, Proceso, Salida.

___

## Ejemplo sándwich  

* Input: ingredientes y utensilios.
* Proceso: pasos para armar el sándwich.
* Output: sándwich listo.

Sirve para entender cómo funciona un algoritmo en la vida real.  

___

## Diagrama de flujo

* Representación gráfica de un algoritmo.  
* Muestra decisiones y pasos de forma visual.  
* Usa símboloes estándar.  
* Ayuda a planificar antes de programar.

___

## Lenguaje de programación  

* Existen entre 700 y 900 lenguajes en uso actual.  
* Si se consideran históricos más de 8.000.  

___

## p5.js  

*  No es un lenguaje, es una librería de JavaScript.  
* Facilita dibujar, animar, crear visuales, etc.  
* Usa la sintaxis de JavaScript, pero simplificada para gráficos.  

___

## Funciones maestras  

* setup ()  
    * Se ejecuta una sola vez.  
    * Configura el lienzo y variables iniciales.

* draw ()  
    * Se ejecuta en bucle continuo (60 veces por segundo).  
    * Permite animación e interacción.  

___

## createCanvas () 

* Crea el lienzo donde se dibuja.  
* Sintaxis: createCanvas ([width], [height], [render], [canvas])  
* Se usa dentro de setup ().  
* Define tamaño en píxeles.  

___

## backfround ()  

* **Define el color de fondo**.  
* Formas de uso:  
    * Escala de grises: background (220)  
    * RGB: background (255,0,0)  
    * Con transparencia, background (r, g, b, a)  
* Puede ir en:  
    * setup (): fondo fijo.  
    * draw (): se limpia cada frame.  

___

## background en setup o draw

* En setup ():  
    * El dibujo deja "rastro" (memoria).  
* En draw ():  
    * Se limpia constantemente (animación limpia).  

___

## Sistema de coordenadas  

* Canvas funciona como plano cartesiano.  
* (0,0) esta en la esquina superior izquierda.  
* Eje X, derecha.  
* Eje Y, hacia abajo.  

___

## Figuras geométricas 2D  

* point (x,y) punto  
* line (x1,y1, x2, y2) línea  
* rect (x, y, w, h) rectángulo  
* ellipse (x, y, w, h) óvalo  
* circle (x, y, d) círculo  
* square (x, y, l) cuadrado  
* triangle (x1, y1, x2, y2, x3, y3) triangulo  
* quad (x1, y1, x2, y2, x3, y3, x4, y4) cuadrilátero  

___

## strokeWeight/ noStroke ()

* strokeWeight: grosor del borde.  
* noStroke: elimina borde.  

___  

## stroke ()  

* Define el color del borde.  
* Ej: stroke(255, 0, 0) (rojo).  

____

## strokeCap ()  

* Define la forma del borde de líneas:  
    * ROUND: redondeado  
    * SQUARE: cuadrado  
    * PROJECT: extendido  
* Default: Round  

___

## fill ()

* Define el **color de relleno** de figuras.  
* Ej: fill (252, 159, 216)  

___

## arc ()  

* Dibuja arcos o semicircunferencias.  
* Sintaxis: arc(x, y, w, h, inicio, fin).  
* Usa ángulos (mejor con **angleMode(DEGREES)**).

* 0° / 0 rad: Alas 3 en punto (derecha).  
* 90° / HALF_PI: Alas 6 en punto (abajo).  
* 180° / PI: Alas 9 en punto (izquierda).  
* 270° / (PI + HALF_PI): A las 12 en punto (arriba).

___

## **Solemne 1**

* Recrear el dibujo que hicimos en papel cuadriculado en un Sketch de P5.js. de 500 x 500 PÍXELES.  
* La entrega debe tener formato de bitácora (Github), en donde deben presentar su proyecto, comentar sobre el proceso de réplica, las dificultades encontradas y sus soluciones, el resultado, el código comentado y el link a su proyecto en el editor de p5.js. Además incluir fotos de su dibujo y W.I.P.  
* Se entrega con el link directo a Github y la bitácora de las clases anteriores también será evaluada.  

___

## Evaluación  

* Código: Sin errores, limpio y comentado.  
* Resultado: Traslación del dibujo exacta y armónica.  
* Complejidad: Uso múltiple tipos de figuas.  
* Bitácora: Registro completo de cada sesión.
