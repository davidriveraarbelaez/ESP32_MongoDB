const express = require("express");  // Importamos express para crear un router que manejará las rutas relacionadas con el sensor DHT11
const router = express.Router();    // Creamos un nuevo router utilizando express.Router()
const controller = require("../controllers/dht11.controller");  // Importamos el controlador que contiene la lógica para manejar las solicitudes relacionadas con el sensor DHT11

router.post("/", controller.guardarDato);   // Definimos una ruta POST en la raíz del router ("/") que llamará a la función guardarDato del controlador cuando se reciba una solicitud POST

module.exports = router;    // Exportamos el router para que pueda ser utilizado en otros archivos, como el servidor principal (server.js) donde se montará esta ruta bajo un prefijo específico (por ejemplo, "/api/dht11")