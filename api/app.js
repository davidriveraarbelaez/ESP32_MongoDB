const express = require("express");     // Importamos express para crear la aplicación del servidor
const cors = require("cors");     // Importamos cors para permitir solicitudes desde diferentes orígenes (Cross-Origin Resource Sharing)

const app = express(); // Creamos una nueva instancia de la aplicación de express

app.use(cors()); // Habilitamos CORS para permitir solicitudes desde diferentes orígenes, lo que es útil para el desarrollo y la integración con otros servicios o aplicaciones frontend
app.use(express.json()); // Habilitamos el middleware de express para parsear el cuerpo de las solicitudes como JSON, lo que nos permitirá recibir datos en formato JSON desde el cliente

app.use("/api/dht11", require("./routes/dht11.routes")); // Montamos el router de las rutas relacionadas con el sensor DHT11 en la ruta "/api/dht11". Esto significa que cualquier solicitud que comience con "/api/dht11" será manejada por las rutas definidas en el archivo dht11.routes.js

module.exports = app; // Exportamos la aplicación de express para que pueda ser utilizada en otros archivos, como el servidor principal (server.js) donde se iniciará el servidor y se conectará a la base de datos.