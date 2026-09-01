# Asistente de compras PROVESA v2.3

Aplicación de sesión para cargar el Excel generado por SAP Business One y preparar pedidos de proveedor.

## Borrador v2.3
- El código de catálogo del proveedor queda oculto en la tabla del borrador, aunque se conserva internamente para las plantillas MSD.
- Se eliminan las columnas `Plantilla MSD` y `Almacén` del borrador.
- Orden de columnas: Nº artículo, Descripción, Cantidad, Precio, Descuento, Sugerido, Importe base.
- Los artículos de frío muestran ❄ al final de la descripción.
- Nº de artículo y descripción son clicables y abren el mismo detalle lateral del artículo.
- La columna Descuento queda editable (0–100 %) y se conserva solo durante la sesión. Todavía no modifica precios, importes ni exportaciones.
- Las plantillas MSD siguen disponibles en los bloques superiores de cada pedido MSD.

La aplicación no guarda datos entre sesiones.
