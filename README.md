# Asistente de compras PROVESA v2.5

Aplicacion de sesion para cargar el Excel generado por SAP Business One y preparar pedidos de proveedor.

## Correcciones v2.5
- Corregido `Aceptar sugerencias visibles`: la funcion faltaba en v2.4 y bloqueaba el registro de eventos de los dos botones de la barra superior.
- `Aceptar sugerencias visibles` copia al borrador la sugerencia de cada articulo que este visible con los filtros actuales y tenga sugerencia mayor que cero.
- `Preparar pedido (n)` vuelve a abrir correctamente la pestana Borrador.
- MSD se separa en pedidos independientes por division: Animales de compania, Porcino y Rumiantes.
- Cada pedido MSD tiene sus propias posiciones, unidades, total y boton para generar su plantilla correspondiente.
- Las referencias MSD con clasificacion ambigua quedan en un bloque separado `Revisar clasificacion` y no entran en ninguna plantilla.
- Se conservan ordenacion del borrador, validacion roja de referencias, precios, descuento preparado y totales.

La aplicacion no guarda datos entre sesiones.
