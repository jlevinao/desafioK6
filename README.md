# Prueba de Performance con k6

## 🧪 Descripción General

Se realizó una prueba de carga utilizando la herramienta **k6** contra la API pública **JSONPlaceholder** con el objetivo de evaluar el comportamiento del sistema bajo concurrencia, validando tanto funcionalidad como rendimiento.

---

## ⚙️ Configuración de la Prueba

- **Herramienta:** k6
- **Lenguaje:** JavaScript (ES6 modules)
- **Tipo de prueba:** Load Testing
- **Usuarios Virtuales (VUs):** 20
- **Duración:** 30 segundos
- **Entorno:** API pública (https://jsonplaceholder.typicode.com)

---

## 🔄 Flujo Ejecutado

La prueba simuló el comportamiento de múltiples usuarios realizando las siguientes acciones:

1. **GET /posts**
   - Consulta de lista de publicaciones.
   - Validación de respuesta HTTP 200.
   - Validación de contenido en la respuesta.

2. **POST /posts**
   - Creación de un nuevo recurso.
   - Validación de respuesta HTTP 201.
   - Verificación de generación de ID.

---

## ✅ Validaciones (Checks)

- GET status 200
- GET tiene contenido
- POST status 201
- POST crea id

Resultado:
- ✅ 100% checks exitosos
- ✅ API funcionalmente correcta

---

## 📊 Métricas Relevantes

- **http_req_duration (avg):** 352 ms
- **http_req_duration (p90):** 636 ms
- **http_req_duration (p95):** 845 ms
- **http_req_failed:** 0%
- **iterations:** 355
- **requests totales:** 710

---

## 📈 SLA Definido

- p95 < 500 ms
- tasa de error < 1%

---

## ⚠️ Resultado del SLA

- ❌ El percentil 95 superó el límite establecido (845 ms > 500 ms)
- ✅ No se detectaron errores HTTP

---

## 🧠 Tecnologías Utilizadas

- k6 (motor de carga basado en Go)
- JavaScript para scripting
- HTTP/HTTPS
- JSON (payloads y respuestas)

---

## 🚀 Conclusión Técnica

El sistema evaluado respondió correctamente desde el punto de vista funcional; sin embargo, presentó degradación en los tiempos de respuesta bajo carga, incumpliendo el SLA definido para el percentil 95.

