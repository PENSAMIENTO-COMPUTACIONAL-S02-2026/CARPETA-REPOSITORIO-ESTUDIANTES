# Datos Dinámicos: Variables

## ¿Qué son los datos dinámicos?

Datos que cambian constantemente durante la ejecución del programa.

Ejemplos:
- posición del mouse
- tiempo
- tamaño de ventana
- valores aleatorios

Sirven para:
- crear movimiento
- interacción
- animaciones
- cambios en tiempo real

---

# Variables Integradas en p5.js

## Mouse

| Variable | Uso |
|---|---|
| `mouseX` | posición horizontal del mouse |
| `mouseY` | posición vertical del mouse |
| `pmouseX` | posición horizontal anterior |
| `mouseIsPressed` | detecta click |
| `mouseButton` | botón presionado |

## Ejemplo

```javascript id="d6vijv"
ellipse(mouseX, mouseY, 100, 100);
```

La figura sigue al mouse.

---

# Variables del Canvas

| Variable | Uso |
|---|---|
| `width` | ancho del canvas |
| `height` | alto del canvas |

Definidas automáticamente por `createCanvas()`.

---

# Variables de Ventana

| Variable | Uso |
|---|---|
| `windowWidth` | ancho de la ventana |
| `windowHeight` | alto de la ventana |
| `focused` | detecta si la ventana está activa |

## Ejemplo

```javascript id="5v0vkh"
createCanvas(windowWidth, windowHeight);
```

Canvas responsivo.

---

# Variables del Teclado

| Variable | Uso |
|---|---|
| `key` | última tecla presionada |
| `keyCode` | código de tecla |
| `keyIsPressed` | detecta si una tecla está presionada |

---

# Variables de Tiempo

| Variable | Uso |
|---|---|
| `frameCount` | cantidad de frames |
| `deltaTime` | tiempo entre frames |

---

# Crear Variables Propias

## Declarar variables

```javascript id="3cv52j"
let x;
const velocidad = 5;
```

## Tipos

### `let`
Variable que puede cambiar.

### `const`
Variable constante.

### `var`
Forma antigua de declarar variables.

---

# Inicializar Variable

Dar un valor inicial.

```javascript id="yzcxpm"
let x = 100;
```

---

# Usar Variable

```javascript id="8qqgix"
ellipse(x, 200, 50, 50);
```

---

# JavaScript Objects

Agrupan variables relacionadas.

## Ejemplo

```javascript id="k9knul"
let pelota = {
  x: 100,
  y: 200,
  tamaño: 50
};
```

## Acceder a propiedades

```javascript id="4vgnr0"
pelota.x
pelota.y
```

## Uso

- organizar código
- agrupar datos
- manejar elementos complejos

---

# Función `random()`

Genera números aleatorios.

---

## `random()`

Número entre `0` y `1`.

```javascript id="0g3m8r"
random();
```

---

## `random(max)`

Número entre `0` y `max`.

```javascript id="2kzjlwm"
random(100);
```

---

## `random(min, max)`

Número entre `min` y `max`.

```javascript id="8qf5g8"
random(20, 50);
```

---

# Uso de `random()`

- posiciones aleatorias
- colores aleatorios
- movimiento orgánico
- variaciones visuales

---

# Función `map()`

Transforma un valor desde un rango a otro.

## Sintaxis

```javascript id="5j4d92"
map(valor, minOriginal, maxOriginal, minNuevo, maxNuevo);
```

---

## Ejemplo

```javascript id="rm0v5u"
let tamaño = map(mouseX, 0, width, 10, 200);
```

---

## Explicación

`mouseX`
→ valor original

`0, width`
→ rango original

`10, 200`
→ nuevo rango

---

# Uso de `map()`

- cambiar tamaños
- controlar velocidad
- modificar colores
- relacionar interacción y visuales

---

# Conceptos Importantes

## Interacción en tiempo real

El sketch responde continuamente a:
- mouse
- teclado
- tiempo
- ventana

---

# Funciones y Variables Aprendidas

## Variables

- `mouseX`
- `mouseY`
- `width`
- `height`
- `windowWidth`
- `windowHeight`
- `frameCount`
- `deltaTime`

## Funciones

- `random()`
- `map()`

## JavaScript

- `let`
- `const`
- objetos (`{}`)

