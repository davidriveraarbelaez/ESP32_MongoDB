require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Error MongoDB:", err.message));

const sensorSchema = new mongoose.Schema({
  temperatura: Number,
  humedad: Number,
  fecha: { type: Date, default: Date.now }
});

const Sensor = mongoose.model("Sensor", sensorSchema);

app.post("/api/dht11", async (req, res) => {
  try {
    const { temperatura, humedad } = req.body;

    const nuevo = new Sensor({ temperatura, humedad });
    await nuevo.save();

    res.json({ mensaje: "Datos guardados en Atlas" });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar" });
  }
});

app.listen(3000, () =>
  console.log("Servidor en http://localhost:3000")
);