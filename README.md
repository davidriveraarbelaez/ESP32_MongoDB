# ESP32_MongoDB
## Laboratorio 1 - Base de datos II

### Instrucciones para el hardware

1. Clonar el repositorio
2. Abrir la carpeta ESP32
3. Copiar la IP de su computador
```bash
ifconfig
```
4. Crear el archivo "config.h"

```cpp
#ifndef CONFIG_H
#define CONFIG_H

// ===== WIFI =====
#define WIFI_SSID "mired"
#define WIFI_PASS "micontraseña"

// ===== SERVIDOR API =====
#define SERVER_URL "http://IP_PC:3000/api/dht11"

// ===== SENSOR =====
#define DHTPIN 14
#define DHTTYPE DHT11

// ===== INTERVALO =====
#define READ_INTERVAL_MS 5000

#endif
```

**El computador y la ESP32 deben estar conectados a la misma red**

