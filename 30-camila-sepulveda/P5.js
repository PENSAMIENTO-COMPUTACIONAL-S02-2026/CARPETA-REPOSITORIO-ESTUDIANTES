# P5.js

Algoritmo: secuencia de instrucciones, paso a paso, logicas, finitas, definidas,ordenadas, lógica finitud y precisión,que permiten solucionar un problema, 
o tareas especificas.
  

## estructura

siempre debe haber un **imput** (entrada): información ,ingredientes o utencilios necesarios para empezar a hacer un producto.
**proceso**: lista de instrucciones o pasos lógicos para desdarrolar el proyecto, que transforman la entreda, conjunto con los ingredientes(algoritmo). 
**output** (salida): el resultado final o la solución al problema. 
  

## diagramas de flujo: 
representación gráfica de un algoritmo o de los pasos de un proceso. Se utiliza como herramienta de planificación para visualizar la logica de un 
programa antes de escribir una solo linea de codigo. se usan componentes Estandar (Simbología), para que cualquier programador pueda entenderlo.
  
ej: la lampara no funciona, esta enchufada?, esta quemada la ampolleta?; comprar una lampara. 


## lenguaje de programación

existen entre 700 y 900 lenguajes de programación, utilizados actualmente en la industria, la academia y el desarrollo de software profesional.
los más usados son Python, java, c#, javascript,typescript,PHP,ruby,C,rust, entre otros. 
  

## P5.js
usa libreria y lenguaje de Javascript, usando ls potencia y la sintaxis, pero te regala un vocabulario especializado para dibujar, animar y crear
cosas visuales, pero mas simplificada, para poder manejarlo de una manera mas sencilla.


## funciones maestras.

**setup()**: Ejecuta una sola vez al principio ( para crear lienzo), su proposito es configurar el entorno inicial, definiendo el tamaño de archivo,
cargas imágenes o ssonidos y estableces configuraciónes que no cambiarán (como color de fondo inicial).

**draw()**: se ejecuta un bucle infinito (normalmente 60 veces por segundo), es lo que permite crear animaciones, se puede modificar y su proposito 
es crear movimiento o interacción en tiempo real, dibujando formas que cambian de posición, detectando donde esta el ratón o cambiando su color gradualmente.
  

# create canvas.
  linea de codigo para crear el crear el fondo: createCanvas([width],[height],[renderer],[canvas]);

**Render**: define el motor de renderizado, P2D(Default): confirgura el programa en modo 2D, imagenes basicas, planas.
  
**WEBGL**: ativa modelo 3D, utiliza pieza grafica (GPU), que es indispensable para usar funciones como **box(), sphere(),luces o texturas complejas**.
  
**canvas**: parametro oculto y menos utilizado, pero util para desarrollar programas sitios web.
  
  
  
! comando ++ es para acercar la visualizacion de la pantalla 


# background
debtro de su parentesis se cambia el color.
sintaxis: **background(v1, v2, v3, [a]);**

no sirve para designar color al lienzo , se puede poner en el setup(); o en el draw(), pero tiene resultados diferentes
[v1,v2,v3], sobn los valores RGB. se puede obtener los valores RGB de los sitios web, https://colorspicker.net/es/  o  https://htmlcolorcodes.com/ 

[a] : parametro para el canal alpha, nos sirve para darle semitransparencia al color de fondo. (0_255), donde 1 sera muy transparente y 255 muy poco 
transparente (se puede usar sin este parametro).


! siempre debe estar cerrado por { la informacion que le pida el porgrama 
                                                    
!programa para sacar codigos de colores: HTML colors codes, colormode(HSL) 
  

! Si se quiere hacer una estela de colores se debe poner el color background en estup, pero si se quiere un fondo plano se color se debe dejar en background
coordenada x es el ancho, horizontal, y vertical.



## background 
1. Escala de grises(1 numero): background(220); (donde 0 es negro y 255 es blanco).
2. Color RGB(3 numeros): background(255,0,0),(rojo,verde,azul).
3. Nombres de colores: background(´blue´);(siempre entre comillas).
4. transparencia(4 numeros): background(0,255,50); (R,G,B y el cuarto numero es el canal ""alpha""). 


##Espacio de color RGB:
1. H: Hue [0 - 360°]
2. S: Santuration [0 - 100%]
3. B: Brightness [0 - 100%]

## Espacio de color HSL:
1. H: Hue [0 - 360°]
2. S: Saturation [0 - 100%]
3. L: Lightness [0 - 100%]

! para cambiar el modo de color a HSB consultar referencia: https://p5js.org/reference/p5/colorMode/                                 
                                

# dibujar en p5.js:
sistema de coordenadas (x,y), comp lano cartesiano. Tener en cuenta que el punto (0,0), no esta en el centro, sino en la esquina superior izquierda. 


 ## Figuras Geométricas 2D:

Point(x,y); //dibuja un pixel en coordenadas dadas. 
Line(x1,y1,x2,y2); //dibuja una linea desde el punto inicial hasta un punto final. 
Rect(x,y,ancho,alto); //dibuja un rectangulo. por defecto x e y definen la esquina superior izquiera.
Ellipse(x,y,ancho,alto); //dibuja un ovalo o circulo. x e y definen el centro de la figura. 
Circle(x,y,diametro); //una version simplificada de la elipse cuando quieres un circulo perfecto. 
Square(x,y,lado); //un rectangulo donde todos los lados son iguales.
Triangle(x1,y1,x2,y2,x3,y3); //necesitas darle las coordenadas de sus tres esquinas.
Quad(x1,y1,x2,y2,x3,y3,x4,y4); // un cuadrilatero. sirve para hacer formas irregulares de cuatro lados. 


## Tamaño del borde:

**strokeWeight(weight)**;
establece tamaño de borde de las figuras o el ancho de la linea y punto . siempre se pone arriba de Stroke();. strokeWeight(weight);

**noStroke()**: se usa para que las figuras no tengan borde. 


## Color del borde:

**stroke()** : establece el color de relleno y contornos de las figuras. se coloca arriba de la fihura que se quiera colorear. stroke(v1,v2,v3,[alpha]);. 


## forma del borde/linea

**strokeCap()**: Define la forma de la linea o borde de nuestras figuras ( linea terminada redonda, semi redonda o cuadrada), pueden ser **round,
square,project. strokeCap(cap);. 

                                  
## relleno de color:

**fill()**: establece **color** de relleno de la figura , se pone arriba de la forma para colorear.  fill(v1,v2,v3,[alpha];.
                                  
                                                                                                      
## figuras geometricas 2D avanzadas:

**ar()**: sirve para haceer arcos o medio circulo. **X e Y** son las coordenadas del entro del circulo que contiene este arco, **W y H** son la anchura y
alto del circulo que contiene este arco. **Star** y **stop** es donde comienza y termina el angulo de este arco. 

**arc(x,y,h,start,stop)**

  se mueve al sentido del reloj( eje x positivo) 

  !activar modo angulos en el SETUP(); para que sea mas facil los angulos: angleMode(DEGREES);                                 
                                  
  
  
