#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>
#include "config.h"   // Importar configuración

// Crear objeto DHT usando config.h
DHT dht(DHTPIN, DHTTYPE);

void conectarWiFi() {
  Serial.print("Conectando a WiFi");

  WiFi.begin(WIFI_SSID, WIFI_PASS);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi conectado");
  Serial.print("IP asignada: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);
  dht.begin();

  delay(1000);
  Serial.println();
  Serial.println("Sistema DHT11 → MongoDB iniciado");

  conectarWiFi();
}

void loop() {

  // Reconectar WiFi si se cae
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi desconectado. Reconectando...");
    conectarWiFi();
  }

  // ===== Lectura del sensor =====
  float humidity = dht.readHumidity();
  float temperatureC = dht.readTemperature();

  if (isnan(humidity) || isnan(temperatureC)) {
    Serial.println("Error leyendo DHT11. Revisar sensor.");
    delay(READ_INTERVAL_MS);
    return;
  }

  Serial.printf("Temperatura: %.1f °C | Humedad: %.1f %%\n",
                temperatureC, humidity);

  // ===== Envío HTTP =====
  HTTPClient http;

  http.begin(SERVER_URL);
  http.addHeader("Content-Type", "application/json");

  // Crear JSON manual
  String json = "{";
  json += "\"temperatura\":" + String(temperatureC) + ",";
  json += "\"humedad\":" + String(humidity);
  json += "}";

  int httpResponseCode = http.POST(json);

  if (httpResponseCode > 0) {
    Serial.print("Respuesta HTTP: ");
    Serial.println(httpResponseCode);

    String respuesta = http.getString();
    Serial.println("Servidor dice: " + respuesta);
  } else {
    Serial.print("Error en envío: ");
    Serial.println(httpResponseCode);
  }

  http.end();

  delay(READ_INTERVAL_MS);
}