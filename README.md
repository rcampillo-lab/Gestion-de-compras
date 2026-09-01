# Asistente de compras PROVESA v2.1

Aplicación de sesión: no persiste los datos cargados ni el borrador.

## Cambios v2.1
- `Comprometido` se muestra como **Pendiente de servir**.
- `Pendiente compra` se muestra como **Solicitado a proveedor**.
- Nuevas columnas **Uds caja** y **Uds mín. dto.** antes de Sugerido.
- Uds caja y Uds mín. dto. son acumulativas: cada clic suma ese bloque a `A pedir`.
- Sugerencia por cobertura: general 30 días, MSD 75 días, Elanco 60 días y Lenda 60 días.
- La sugerencia descuenta stock útil, pendiente de servir y solicitado a proveedor, y redondea por caja.
- El proveedor del artículo está preparado para leer `Proveedor última compra` del nuevo query.
- El detalle muestra los 3 últimos clientes, cantidad y fecha cuando el query los incluye.
- Se mantienen filtros, lotes/caducidad, pedidos abiertos y plantillas MSD.

> `Uds mín. dto.` usa el campo que el query entrega como `Uds mín. descuento` / `Mínimo pedido`.


## v2.1 · Promociones de proveedor
- `Uds. caja` continúa viniendo del query SAP (`U_ARTES_UCAJ`).
- `Uds. mín. descuento` deja de tomar cualquier valor de `OITW.MinOrder`/SAP.
- Las cantidades mínimas para descuento se mantienen en `promotions.js` como reglas comerciales por artículo.
- Las reglas pueden incluir fechas de vigencia, etiqueta y nota.
- Si no hay una promoción activa para un artículo, la tabla muestra `—`.
- Cada clic en una cantidad mínima activa sigue sumando ese bloque a `A pedir`.
