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

### Instrucciones para la base de datos

1. Abrir Mongo Atlas.
2. Ir a [Database and Network Access](https://cloud.mongodb.com/v2/6993ceeaa384015a68eb0d23#/security/database/users)
3. Crear un nuevo usuario, **ADD NEW DATABASE USER**.
4. Copiar la contraseña (Opcional si asignó una de difícil recordación).
5. Asignar permisos de lectura y escritura en built-in-role.

### Instrucciones para el backend

1. Abrir la carpeta api
2. Crear en el archivo **.env**
```bash
MONGO_URI=copiar desde mongo atlas
PORT=3000
```
3. Ejecutar el script server.js

```bash
node server.js
```

## Ejercicios a realizar

1. Cargue el firmware a la ESP32, verifique desde el monitor serie los datos que están enviando.
2. Revisar y corregir el error "-1" que se observa en el monitor serie, ¿a qué se debe este error".
3. Verificar en Mongo Atlas la creación de la base de datos y la respectiva corrección.
4. En esta primera instancia es normal que no se almacenen los datos en la colección de Mongo Atlas, la actividad a entregar es la revisión y ajustes de los scripts de la carpeta **api** para enviar los datos.