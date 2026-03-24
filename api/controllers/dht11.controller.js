const Sensor = require("../models/Sensor"); // Importamos el modelo de Sensor para poder interactuar con la colección de sensores en MongoDB

exports.guardarDato = async (req, res) => { // Exportamos una función asincrónica llamada guardarDato que recibirá la solicitud (req) y la respuesta (res) del cliente
  const { temperatura, humedad } = req.body; // Extraemos la temperatura y humedad del cuerpo de la solicitud (req.body)

  const nuevo = new Sensor({ temperatura, humedad }); // Creamos una nueva instancia del modelo Sensor con los datos recibidos
  await nuevo.save(); // Guardamos la nueva instancia en la base de datos de MongoDB

  res.json({ mensaje: "Dato almacenado" }); // Respondemos al cliente con un mensaje indicando que el dato ha sido almacenado correctamente
};