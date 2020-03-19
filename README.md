Anum
Este proyecto busca formar un puente sensorial que comunique los sentimientos de las plantas con los sentimientos de los seres humanos con que interactúa.

https://anum-b36a3.web.app/

¿Como entender como estan distribuidos los archivos en este repositorio?
La carpeta más importante y con la que trabajaremos se llama public. 
En la carpeta public se guardan los archivos .html y .js

Un archivo .html, en este contexto son las VISTAS, definen la estructura de una pagina, es decir, la posicion donde van los bloques de texto, las imagenes, los botones y los cuadros de texto rellenables. 

Un archivo .js(JavaScript) define las funciones que realizan los elementos que el archivo .html posiciona. Si queremos implementar una funcion, es decir, una LOGICA DE NEGOCIO debemos trabajar sobre los archivos .js

La carpeta 'public' es la que ocupa firebase para hacer el deploy. Deploy significa subir nuestra pagina web al servidor. Para que cuando el usuario escriba la direccion de la pagina en el navegador, el server le mande la pagina que nosotros subimos al server.

Dentro de la carpeta public hay: archivos .html y la carpeta 'static'.
  El archivo index.html es el primero que firebase ejecuta y es la primera vista que el usuario va a visualizar.
  
  La carpeta estatic tiene 3 subcarpetas:
  
    CSS: En la cual se guardan archivos .css, que son archivos que sirven para definir la fuente de las letras, su color
         y formato. Además, sirven para definir los colores de la pagina web.
   
   IMAGES : Que tiene imagenes que luego se van a mostrar en la pagina (al hacer deploy tambien estamos subiendo imagenes)
   
   JS: Que contiene los archivos .js que implementan la logica del negocio.
 
Principalmente estaremos trabajando con los archivos .html y con .js

El resto de las carpetas no las toquen.
Ese ha sido un buen resumen de la distribucion de nuestro repositorio

Documentacion bot
El bot envia datos a la base de datos (realtime database) de manera automatica
el bot esta alojado en esta pagina
https://anum-b36a3.firebaseapp.com/bot.html
en la seccion enviar dato se envia una medicion de temperatura/humedad/luminocidad cada vez que se aprienta enviar.
Se crea una rama que se llama 'medicion' a la misma altura que la rama 'plant_id' y esta objeto mandado se guarda en una rama medicion
