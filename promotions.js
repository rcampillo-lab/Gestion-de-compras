'use strict';

/*
  Reglas comerciales de promociones de proveedor.
  Estos datos NO proceden de SAP y no se guardan durante la sesión.
  Se mantienen como configuración fija de la aplicación y se actualizan
  cuando PROVESA recibe una nueva promoción de proveedor.

  Formato de una regla:
  {
    itemCode: '005646',
    minDiscountQty: 30,
    validFrom: '2026-09-01',   // opcional, AAAA-MM-DD
    validTo: '2026-09-30',     // opcional, AAAA-MM-DD
    label: 'Promoción septiembre MSD',
    note: 'Condición comercial recibida del proveedor'
  }
*/
window.PROVESA_PROMOTIONS = [
  // Las promociones se irán añadiendo aquí.
];
