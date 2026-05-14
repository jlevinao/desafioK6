# Conclusión de la Prueba de Performance

## 🎯 Objetivo

Evaluar el comportamiento de una API bajo condiciones de carga concurrente, midiendo tiempos de respuesta y estabilidad.

---

## ✅ Resultados Obtenidos

- La API respondió correctamente a todas las solicitudes realizadas.
- No se presentaron errores HTTP durante la ejecución.
- Todas las validaciones funcionales fueron exitosas (100%).

---

## ⚠️ Hallazgo Principal

Se identificó una degradación en los tiempos de respuesta bajo carga:

- El percentil 95 (p95) alcanzó **845 ms**, superando el SLA definido de **500 ms**.

---

## 📊 Interpretación

Esto indica que:

- El sistema es funcionalmente estable ✅
- Existe variabilidad en el rendimiento bajo carga ⚠️
- Un porcentaje de las requests presenta latencias elevadas ❌

---

## 🧠 Conclusión Final

La prueba demuestra que, si bien la API es estable y no presenta errores funcionales, el rendimiento bajo condiciones de concurrencia no cumple con los niveles esperados de servicio.

Esto sugiere la necesidad de:

- Optimización de tiempos de respuesta
- Análisis de cuellos de botella
- Ajuste de infraestructura o capacidad

---

## 🚀 Valor del Test

Este tipo de prueba permite identificar problemas que no son visibles en pruebas funcionales, aportando información clave para la mejora continua del sistema.

