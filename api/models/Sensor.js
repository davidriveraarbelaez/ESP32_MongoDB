const mongoose = require("mongoose"); // Importamos mongoose para definir el esquema de datos y el modelo de Sensor

const sensorSchema = new mongoose.Schema({ // Definimos el esquema de datos para el modelo Sensor
  temperatura: Number, // Campo para almacenar la temperatura, de tipo Number
  humedad: Number, // Campo para almacenar la humedad, de tipo Number
  fecha: { type: Date, default: Date.now } // Campo para almacenar la fecha y hora de la medición, con un valor por defecto que es la fecha actual
});

module.exports = mongoose.model("Sensor", sensorSchema); // Exportamos el modelo de Sensor para que pueda ser utilizado en otros archivos, como el servidor principal (server.js)