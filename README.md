# Servidores web & Express avanzado

El proyecto de ProductManager se enfoca en la gestión de un catálogo de productos como objetos.
En el archivo `ProductManager.js`, creamos la clase principal que incluye las siguientes funciones:
  - AGREGAR Productos
  - OBTENER TODOS los Productos
  - OBTENER Productos por ID
  - ACTUALIZAR Productos por ID
  - ELIMINAR Productos por ID

El proyecto CartManager es un servicio para manejar carritos de compras sobre los productos relacionados en el catalogo de ProductManager.
En el archivo `CartManager.js`, creamos la clase principal que incluye las siguientes funciones:
  - Permite CREAR nuevos carritos.
  - OBTENER todos los carritos existentes.
  - OBTENER los productos de un carrito específico por ID.
  - AÑADIR diversos/repetidos productos a un carrito existente.

El catálogo de productos se guarda en un archivo llamado `products.json`.
Los carritos de compra se almacenan en un archivo llamado `carts.json`.
La clase se importa para permitir múltiples solicitudes desde un servidor externo.

En el servidor `app.js` hacemos al archivo `index.js` el cual contiene un ruteo para ambos proyectos el cual les da una salida por medio de la importacion y direccion de ruta en `/api/products` o `/api/carts`.
El archivo routes.js de cada proyecto contiene la clase y las funciones principales importadas de su Manager original (`ProductManager.js` y `CartManager.js`) mediante los multiples métodos importados. Desde aquí, solicitamos todos los Productos, podemos filtrarlos por ID o establecer una cantidad específica para visualizar en pantalla. En los carritos podemos agregar multiples productos por su ID.

## Pasos para ejecutar el proyecto:
1. Clona este repositorio en tu máquina local (node.js instalado).
2. Navega hasta el directorio `ProductManager - 4ta entrega`.
3. Ejecuta los siguientes comandos desde un CMD para compilar el proyecto:
    - Instala las dependencias para levantar un servidor en el `Puerto 8080`.
    - Ejecutar `npm run dev` para comenzar con el Testeo del aplicativo sobre el `/src/app.js`.
    - Abrir una pagina web `http://localhost:8080/api/products` para realizar los queries correspondientes en PRODUCTOS:
      * `http://localhost:8080/api/products`: respondera con todos los productos en catalogo.
      * `http://localhost:8080/api/products?list=5` respondera con solo los primeros 5 productos en catalogo.
      * `http://localhost:8080/api/products?list=0` respondera con todos los productos en catalogo.
      * `http://localhost:8080/api/products/2` respondera con el producto ID = 2 en catalogo.
      * `http://localhost:8080/api/products/15` respondera con un error (solo hay 10 productos en el catalogo).
    - Desde un POSTMAN contiene la posibilidad de agregar Productos mediante lo siguiente:
      * `Body < Raw < JSON` desde POSTMAN para agregar el Producto.
      * Producto: `{
         "title":"Llavero",
         "description":"Azul",
         "thumbnail": "https://www.google.com",
         "price": 299,
         "code":"adf121", 
         "stock": 100
        }`
    - Abrir una pagina web `http://localhost:8080/api/carts` para realizar los queries correspondientes en CARTS:
    - Desde un POSTMAN contiene la posibilidad administrar Carritos mediante lo siguiente:
      * Con el metodo POST sobre `http://localhost:8080/api/carts`: se crearan los carritos (sin ningun parametro, solo su ID automatico y un objeto para los productos).
      * Con el metodo GET sobre `http://localhost:8080/api/carts` respondera con TODOS los carritos en disposicion.
      * Con el metodo GET sobre `http://localhost:8080/api/carts/:cid` respondera con solo los productos que se encuentran agregados en el carrito (si no contiene, soltara un aviso).
      * Con el metodo POST sobre `http://localhost:8080/api/carts/:cid/carts/:pid` se agregara el producto con su ID en el ID del carrito correspondiente (cid es "Carrito ID" y pid es "Producto ID").
      
## Estructura de directorios
`package.json` contiene la información sobre el proyecto, como el nombre, la versión, las dependencias requeridas, los scripts de ejecución y la licencia. Es fundamental para la gestión y el funcionamiento del proyecto en el ecosistema de Node.js.
`src\app.js` es el punto de entrada principal de la aplicación. Aquí se configura y se inicia la aplicación Express, se definen middleware y se conectan las rutas.

`src\data\carts.json` almacena la información sobre los carritos de compras en formato JSON. Es utilizado por el gestor de carritos para leer y escribir datos sobre los carritos.
`src\data\products.json` almacena la información sobre los productos en formato JSON. Es utilizado por el gestor de productos para leer y escribir datos sobre los productos.

`src\managers\CartManager.js` contiene la lógica para manejar las operaciones relacionadas con los carritos de compras, como crear nuevos carritos, obtener información sobre los carritos existentes y añadir productos a los carritos.
`src\managers\ProductManager.js` contiene la lógica para manejar las operaciones relacionadas con los productos, como obtener información sobre los productos existentes.

`src\routes\carts.routes.js` define las rutas relacionadas con los endpoints de la API para los carritos de compras, como crear un nuevo carrito, obtener información sobre los carritos existentes y añadir productos a los carritos.
`src\routes\index.js` define las rutas principales de la API. Aquí se importan y se montan las rutas relacionadas con los productos y los carritos.
`src\routes\products.routes.js` define las rutas relacionadas con los endpoints de la API para los productos, como obtener información sobre los productos existentes.

