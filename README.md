# Asistente de compras · PROVESA v2.8

Aplicación 100 % de sesión: al recargar o cerrar la página se pierden los datos cargados y el borrador.

## Promociones incorporadas
- FATRO Animales de Compañía: Oferta Distribuidor. Cruce por código de catálogo de proveedor.
- FATRO Ganadería: lista distribuidor 2026. Cruce conservador por descripción normalizada únicamente para artículos clasificados como Producción / Porcino / Rumiantes.
- En Ganadería solo se usan las columnas Cantidad (mínimo para oferta) y Descuento.
- La cifra de Uds. mín. dto. es acumulativa al pulsarla y su tooltip muestra el porcentaje de descuento.
- Al alcanzar el mínimo, el descuento pasa automáticamente al borrador y al total neto del pedido.

No se incluye ningún query SAP en este ZIP.


## v2.8
- Fatro Ganadería deja de cruzarse por descripción.
- Las promociones de Ganadería se identifican por el código interno SAP/PROVESA del artículo.
- Cantidad = unidades mínimas de descuento; Descuento = porcentaje aplicado al alcanzar el mínimo.
- La referencia sin código interno en el catálogo no recibe promoción automática hasta que se facilite su código.
