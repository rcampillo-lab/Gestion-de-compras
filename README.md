# Asistente de compras · PROVESA

Aplicación web estática para trabajar con el resultado del query maestro de SAP Business One HANA.

## Sin persistencia
- No usa localStorage.
- No usa base de datos.
- No envía el Excel a ningún backend.
- Los datos, filtros y borrador viven solo en la memoria de la pestaña.
- Al recargar o cerrar la página se pierde la sesión.

## Flujo
1. Ejecutar el query maestro en SAP B1 y exportar a Excel/CSV.
2. Cargar el archivo en la app.
3. La app separa STOCK y PEDIDO por `Tipo registro`.
4. La pantalla principal se agrupa por `Nº artículo + Almacén`; los datos de stock repetidos por lote no se suman.
5. Los lotes quedan en el detalle del artículo.
6. Las líneas PEDIDO se muestran en el seguimiento de pedidos de proveedor.
7. `A pedir` genera un borrador temporal.
8. `Exportar Excel SAP` crea `Nº artículo | Cantidad`.

## Motor de compra v1
Demanda diaria = Rot. 60 / 60. Objetivo = máximo entre mínimo de inventario y demanda para los días objetivo. Disponible = máximo de Stock - Comprometido y 0. Proyectado = Disponible + Pendiente compra. Necesidad = Objetivo - Proyectado. El resultado se redondea hacia arriba por `Uds caja`.

Las caducidades generan avisos, pero todavía no descuentan stock automáticamente del cálculo de compra; afinaremos esa lógica FEFO después.

## Políticas en código
- General: 12 meses.
- FATRO: sin política.
- VETNOVA: sin política.
- MSD: 6 meses para frío y 9 meses para no frío.

No requiere build: `index.html`, `styles.css`, `app.js`.


## Cambios v1.1
- El filtro de almacén normaliza 1/2 a 01/02 para que SAP/Excel no rompa el filtrado.
- Se elimina Código proveedor de la tabla principal; sigue disponible en el detalle y borrador.
- La app ignora artículos inactivos si el fichero contiene `Inactivo`/`frozenFor` o `Activo`/`validFor`.
- Recomendación de query: excluirlos directamente con `AND COALESCE(I."frozenFor", 'N') = 'N'` en ambos SELECT.


## v1.2
- Proveedor con ancho fijo y puntos suspensivos en tablas para mantener una vista compacta.
- Nombre completo visible al pasar el ratón sobre el proveedor.


## v1.3
- La tabla principal usa todo el ancho disponible y no requiere desplazamiento horizontal.
- Descripción, comentario y proveedor se recortan con puntos suspensivos y muestran el texto completo al pasar el ratón.
- Cabeceras compactadas y botón de detalle reducido para mantener visibles todas las columnas.
- Los estados incluyen explicación en tooltip.


## v1.4
- Copo de nieve junto al código para artículos con Frío = Y.
- Filtro Área: Todos / Animales de compañía (Propiedad 1) / Producción (Propiedad 2).
- Filtro de producción: Porcino (Propiedad 3) / Rumiantes (Propiedad 4); se oculta al seleccionar Animales de compañía.
- El query debe incluir QryGroup1..QryGroup4 con los alias usados por la app.


## v1.5
- Copo de nieve movido del número de artículo a la descripción.
- Orden de tabla principal: Ver, Estado, Nº artículo, Descripción, Stock, Comp., Pend., Rot.60, Días, Mín., Cad., Sug., A pedir, Nota, Proveedor.
- Detalle del artículo como panel lateral derecho de media pantalla, con datos en filas.
- Clic en la cantidad sugerida copia automáticamente la sugerencia al campo A pedir.
- Nº de artículo y descripción también abren el detalle.


## v1.6
- Copo de nieve al final de la descripción.
- Todas las fechas visibles en formato dd/mm/aaaa.
- Eliminada la columna Ver.
- Proveedor más estrecho con puntos suspensivos.
- Respaldo de proveedor desde pedidos abiertos cuando el proveedor del STOCK viene vacío.
- El query v1.4.5 mantiene el proveedor preferente de OITM cuando existe y, si está vacío, usa como respaldo el proveedor del último pedido de compra no cancelado. Esto permite recuperar proveedores como Lenda cuando la ficha de artículo no tiene CardCode informado.
