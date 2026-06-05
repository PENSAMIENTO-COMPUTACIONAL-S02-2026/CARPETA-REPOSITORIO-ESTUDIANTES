#  Clase 1: Introducción a p5.js

## { Algoritmo }

Una secuencia de instrucciones **paso a paso**, lógicas, definidas, ordenadas y finitas que permiten solucionar un problema o realizar una tarea específica.

### Características fundamentales

| Característica | Descripción |
|---|---|
| **Precisión** | Cada paso debe estar clarísimo, sin ambigüedades |
| **Orden** | Los pasos llevan una secuencia lógica |
| **Finitud** | Tiene que terminar en algún momento |
| **Definición** | Con los mismos datos siempre se obtiene el mismo resultado |

### Estructura de un Algoritmo

- **Input:** La información o ingredientes necesarios para empezar.
- **Proceso:** Los pasos lógicos que transforman esa entrada.
- **Output:** El resultado final o la solución al problema.

> **Ejemplo:** Ingredientes del sandwich → Lista de instrucciones para hacerlo → Sandwich terminado.



## { Diagrama de Flujo }

Representación **gráfica** de un algoritmo o de los pasos de un proceso. Se utiliza como herramienta de planificación para visualizar la lógica de un programa **antes de escribir código**.

Se usan componentes estándar (simbología) para que cualquier programador pueda entenderlo.

## { p5.js }

p5.js **no es un lenguaje nuevo**, sino una **biblioteca (library) de JavaScript**. Usa toda la potencia y sintaxis de JavaScript, pero entrega un vocabulario especializado para dibujar, animar y crear contenido visual de forma sencilla.

---

## { Funciones Maestras }

### `setup()`
- Se ejecuta **una sola vez** al principio.
- **Propósito:** Configurar el entorno inicial.
- Aquí se define el tamaño del lienzo (`createCanvas`), se cargan imágenes o sonidos, y se establecen configuraciones que no cambiarán.

### `draw()`
- Se ejecuta en un **bucle infinito** (normalmente 60 veces por segundo).
- **Propósito:** Crear movimiento y responder a la interacción en tiempo real.
- Aquí se dibujan formas que cambian de posición, se detecta el ratón, etc.


---

## { createCanvas }

Crea el lienzo y determina su tamaño en píxeles. Se pone **una sola vez** dentro de `setup()`.
---

## { Dibujar en p5.js }

El canvas usa un **sistema de coordenadas (x, y)** similar a un plano cartesiano, pero con una diferencia clave:



## { Figuras Geométricas 2D }

point(x, y);                          // Un solo píxel
line(x1, y1, x2, y2);                 // Línea entre dos puntos
rect(x, y, ancho, alto);              // Rectángulo (x,y = esquina superior izquierda)
ellipse(x, y, ancho, alto);           // Elipse u óvalo (x,y = centro)
circle(x, y, diámetro);               // Círculo perfecto
square(x, y, lado);                   // Cuadrado
triangle(x1, y1, x2, y2, x3, y3);    // Triángulo (3 esquinas)
quad(x1,y1, x2,y2, x3,y3, x4,y4);   // Cuadrilátero irregular


## { Estilos de Borde y Relleno }

### `strokeWeight()` — Tamaño del borde

### `noStroke()` — Sin borde

### `stroke()` — Color del borde
### `strokeCap()` — Forma del borde / línea
```javascript
strokeCap(cap);          // Sintaxis
strokeCap(SQUARE);       // Ejemplo
```
Constantes disponibles:

### fill() — Color de relleno

## { Figuras Geométricas 2D Avanzadas }

### `arc()` — Arcos y medios círculos

// Sintaxis
arc(x, y, w, h, start, stop);


- `x, y` → centro del círculo contenedor
- `w, h` → ancho y alto del círculo contenedor
- `start, stop` → ángulo de inicio y fin del arco

> Se recomienda activar en setup(): angleMode(DEGREES);

### Sistema de ángulos en p5.js

> El **grado 0° está a la derecha** (eje X positivo) y avanza en sentido horario.

| Ángulo | Posición |
|---|---|
| 0° / 0 rad | 3 en punto (derecha) |
| 90° / HALF_PI | 6 en punto (abajo) |
| 180° / PI | 9 en punto (izquierda) |
| 270° / PI + HALF_PI | 12 en punto (arriba) |

