const mongoose = require("mongoose"); // Importamos mongoose para manejar la conexión a MongoDB y definir el esquema de datos
mongoose.connect(process.env.MONGO_URI); // Conectamos a MongoDB utilizando la URI almacenada en las variables de entorno
module.exports = mongoose; // Exportamos la instancia de mongoose para que pueda ser utilizada en otros archivos, como el modelo Sensor.js