# **Radios**  

* Radius- Radian
* Es una medida que se usa en geometria. Es cuando el ángulo de afuera mide lo mismo que el ángulo del circulo.
* Un angulo forma un radian cuando el alguno de la circunferencia es igual a su radio.

## **Ángulos** angleMode();

* Por defecto p5.js usa radiantes para medir los ángulos.
* angleMode (RADIANS)
* Para cambiar a grados se usa esto en el fuction SETUP
* angleMode (DEGREES)

* Hay que pensarlo como se mueven las agujas del rejos:
    * TWO_PI 360°
    * PI 180°
    * HALF_PI 90°
    * QUARTER_PI 45°
 
## **Rotación** rotate();

* Sirve para rotar elementos.
* Siempre rota desde el punto de origen (0,0)
* Se recomienda usar con traslante(); y en algunos casos con rectMode();


## **Traslate** translate();

* Sirve para trasladar el punto de origen (0,0) a otra coordenada de mi canvas.

## **Guardar y restaurar** push(); pop();

* Funciones que trabajan juntas como un "sistema de memoria temporal" para el estilo y las transformaciones del lienzo.
* Es para comenzar una variable y encerrarlo en una "capa" y no altera las demás.
* Si quiero que un objeto gire en el sentido contrario le pongo un menos y los valores se vuelven negativos.

## **Escala** scale();

* La función scale() ajusta la escala del sistema de coordenadas actual por el factor especificado.

