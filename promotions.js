'use strict';

/*
  Reglas comerciales de promociones de proveedor.
  No proceden de SAP. Se mantienen como configuración fija de la app.

  Fatro Animales de Compañía: Oferta Distribuidor, cruce por código de catálogo.
  Fatro Ganadería: Lista de precios distribuidor 2026, cruce por código interno
  SAP/PROVESA según el catálogo con códigos internos facilitado.
  Para Ganadería solo se usan Cantidad (mínimo) y Descuento.
*/
window.PROVESA_PROMOTIONS = [
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "1",
    "minDiscountQty": 50.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tsefalen 1.000 mg (9 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "4",
    "minDiscountQty": 50.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Propancat 2 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5",
    "minDiscountQty": 30.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Bimodula 20 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "9",
    "minDiscountQty": 50.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Leish-Tabs (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5030",
    "minDiscountQty": 25.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Deyanil Retard 10 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5031",
    "minDiscountQty": 56.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Deyanil Retard 50 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5081",
    "minDiscountQty": 30.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Eupen Plus 100 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5274",
    "minDiscountQty": 22.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil Pomada  30 g",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5275",
    "minDiscountQty": 6.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil Spray   100 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5293",
    "minDiscountQty": 16.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Lactofin 3 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5294",
    "minDiscountQty": 16.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Lactofin 7 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5295",
    "minDiscountQty": 16.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Lactofin 15 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5302",
    "minDiscountQty": 60.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Flee Spray  400 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5308",
    "minDiscountQty": 15.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prednisolona inyectable (10 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5314",
    "minDiscountQty": 5.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil Pomada  180 g",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5327",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tsefalen 500 mg (108 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5328",
    "minDiscountQty": 8.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tsefalen 1.000 mg (104 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5335",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Marbovet 20 mg (100 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5336",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Marbovet 80 mg (100 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5352",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Rheumocam  1 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5353",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Rheumocam  2,5 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5354",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Privaprol 1 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5355",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Privaprol 2 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5376",
    "minDiscountQty": 16.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Continenza  50 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5393",
    "minDiscountQty": 30.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Propancat 24 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5401",
    "minDiscountQty": 40.0,
    "discountPct": 25.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Dormisan 10 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5409",
    "minDiscountQty": 48.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Isoflurin 250 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5410",
    "minDiscountQty": 120.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Akiball (+25%)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5411",
    "minDiscountQty": 12.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Aceprovet Gotas 20 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5417",
    "minDiscountQty": 20.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Reverse 10 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5418",
    "minDiscountQty": 12.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil 5 pads (10x10)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5423",
    "minDiscountQty": 34.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Antishmania 10 x 5 ml.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5446",
    "minDiscountQty": 35.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Energel (+25%)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5449",
    "minDiscountQty": 30.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tenicipen 10 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5450",
    "minDiscountQty": 12.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tenicipen 50 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5451",
    "minDiscountQty": 3.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tenicipen 1.000 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5460",
    "minDiscountQty": 56.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "OftalmoVit A (5 g)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5461",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prinovox Gato pequeño (0,4x6)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5462",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prinovox Gato grande (0,8x6)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5471",
    "minDiscountQty": 35.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Euthoxin 50%",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5485",
    "minDiscountQty": 20.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Popandog 200 cdos",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5486",
    "minDiscountQty": 80.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Rheumocam oral perros 15 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5487",
    "minDiscountQty": 25.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Rheumocam oral perros 42 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5488",
    "minDiscountQty": 50.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Rheumocam oral gatos 10 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5491",
    "minDiscountQty": 56.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Canidolor 5 mg 20 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5492",
    "minDiscountQty": 12.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Afilaria 3,4 mg/ml (17 ml.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5495",
    "minDiscountQty": 48.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Cardinefril 20 mg (14 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5497",
    "minDiscountQty": 25.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Liverfine 50 ml.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5499",
    "minDiscountQty": 30.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Semelcef 200 mg (10 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5500",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Semelcef 200 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5501",
    "minDiscountQty": 20.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Semelcef 1000 mg (6 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5504",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Alutopic spray 200 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5506",
    "minDiscountQty": 120.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Triderm 30 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5507",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "FiproSmet 0,50 ml gatos (6 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5508",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "FiproSmet 0,67 ml perro S (6 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5509",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "FiproSmet 1,34 ml perro M (6 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5510",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "FiproSmet 2,68 ml perro L (6 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5511",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 15 mg perro/gato XS (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5512",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 30 mg perro S (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5513",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 45 mg gato L (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5514",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 60 mg perro M (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5515",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 120 mg perro L (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5516",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Chanhold 240 mg perro XL (3 pip)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5522",
    "minDiscountQty": 40.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Lagripets 15 ml.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5525",
    "minDiscountQty": 10.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tsefalen 50 mg SO",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5531",
    "minDiscountQty": 120.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 50 (10 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5532",
    "minDiscountQty": 120.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 250 (10 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5533",
    "minDiscountQty": 120.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 500 (10 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5548",
    "minDiscountQty": 6.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Afilaria 3,4 mg/ml (5,67 ml.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5549",
    "minDiscountQty": 40.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Ketabel 10 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5550",
    "minDiscountQty": 20.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Keyvit 14 cdos.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5558",
    "minDiscountQty": 28.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Aticare (100 g)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5559",
    "minDiscountQty": 12.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Sevohale 250 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5560",
    "minDiscountQty": 40.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "AloeOtovet 100 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5561",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 50 (100 cdos).",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5562",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 250 (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5563",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "EupenClav 500 (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5564",
    "minDiscountQty": 126.0,
    "discountPct": 25.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Otisur 15 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5565",
    "minDiscountQty": 10.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil Auris 50 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5566",
    "minDiscountQty": 20.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Vetramil cera podal 120 g",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5568",
    "minDiscountQty": 30.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prednisolona 5 mg (20 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5574",
    "minDiscountQty": 30.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prednisolona 20 mg (20 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5575",
    "minDiscountQty": 6.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Caniliver comprimidos (32 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5576",
    "minDiscountQty": 6.0,
    "discountPct": 25.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Caniliver pasta (2 jeringas)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5577",
    "minDiscountQty": 6.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "CL-exidin 4% Champú  (200 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5578",
    "minDiscountQty": 6.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "CL-exidin 4% Spray  (200 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5579",
    "minDiscountQty": 12.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "CL-Otovet  (100 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5580",
    "minDiscountQty": 18.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Dentaldine  (30 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5586",
    "minDiscountQty": 12.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Semelcef 1000 mg (60 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5587",
    "minDiscountQty": 48.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Oftalmovet colirio (10 ml)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5588",
    "minDiscountQty": 6.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Oftalmoklear 50 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5589",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prednisolona 5 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5590",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Prednisolona 20 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5592",
    "minDiscountQty": 12.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Cani Tabs (60 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5599",
    "minDiscountQty": 48.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Lidobel 100 ml.",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5610",
    "minDiscountQty": 40.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Popandog 10 cdos",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5613",
    "minDiscountQty": 18.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Fatrobendan 1,25 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5614",
    "minDiscountQty": 18.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Fatrobendan 5 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5615",
    "minDiscountQty": 15.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Fatrobendan 10 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5617",
    "minDiscountQty": 96.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Gastrocare gel 20 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5618",
    "minDiscountQty": 70.0,
    "discountPct": 12.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Gastrocare gel 50 ml",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5620",
    "minDiscountQty": 18.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Fatrobendan 5 mg (50 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5621",
    "minDiscountQty": 15.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Fatrobendan 10 mg (50 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5622",
    "minDiscountQty": 35.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 6 mg (10 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5623",
    "minDiscountQty": 35.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 10 mg (10 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5624",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 40 mg (10 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5625",
    "minDiscountQty": 20.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 6 mg (30 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5626",
    "minDiscountQty": 20.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 10 mg (30 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5627",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 40 mg (30 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5628",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 6 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5629",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 10 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5630",
    "minDiscountQty": 9.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Duecoxin 40 mg (100 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5631",
    "minDiscountQty": 90.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Tsefalen 500 mg (12 cdos)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5633",
    "minDiscountQty": 60.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Marbovet 20 mg (10 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "supplierCatalog": "5634",
    "minDiscountQty": 60.0,
    "discountPct": 15.0,
    "promoUnitPrice": null,
    "label": "Fatro · Oferta distribuidor",
    "note": "Marbovet 80 mg (10 cdos.)",
    "segment": "company"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5082",
    "minDiscountQty": 4.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "AD live SUIVAX 500 dosis"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5546",
    "minDiscountQty": 160.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Algenamic 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5547",
    "minDiscountQty": 240.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Algenamic 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5504",
    "minDiscountQty": 300.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Alutopic Spray 200 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5597",
    "minDiscountQty": 144.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Alutopic Spray 400 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5259",
    "minDiscountQty": 5.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biosweet M 5 kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5249",
    "minDiscountQty": 4.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biosweet M 25 kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5434",
    "minDiscountQty": 1.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biopracid AG líquido 5 l."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5443",
    "minDiscountQty": 1.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biopracid Cu líquido 5 l."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5444",
    "minDiscountQty": 1.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biopracid Cu líquido 25 l."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5436",
    "minDiscountQty": 1.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Biopracid HM líquido 1 l."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5611",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "BimoduLa 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5591",
    "minDiscountQty": 150.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "BimoduLa 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5490",
    "minDiscountQty": 160.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Camdolor 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5527",
    "minDiscountQty": 300.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Camdolor 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5105",
    "minDiscountQty": 6.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Crinar (expositor 24 jeringas)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5481",
    "minDiscountQty": 24.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmaglass Vacas 20 bolos"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5537",
    "minDiscountQty": 12.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmaprost 100 ml Flexibag"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5100",
    "minDiscountQty": 20.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmarelin 5 x10 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5530",
    "minDiscountQty": 12.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmarelin 100 ml Flexibag"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5095",
    "minDiscountQty": 56.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmavital 50 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5137",
    "minDiscountQty": 40.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmazin 15 x 2 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5063",
    "minDiscountQty": 24.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dalmazin lata 5 x 20 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5031",
    "minDiscountQty": 56.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Deyanil Retard 50 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5332",
    "minDiscountQty": 150.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dolofenac 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5333",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Dolofenac 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5381",
    "minDiscountQty": 500.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Doxidol 30% 1 kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5382",
    "minDiscountQty": 100.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Doxidol Terneros 30% 1 kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5101",
    "minDiscountQty": 60.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Drofilsa 1 litro"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5404",
    "minDiscountQty": 4.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Epromec 5 l."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5081",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Eupen Plus 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5004",
    "minDiscountQty": 150.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Eupen Plus 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5096",
    "minDiscountQty": 60.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Eupensol 1 Kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5471",
    "minDiscountQty": 35.0,
    "discountPct": 8.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Euthoxin 50 %"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5122",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Fatroflox 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5098",
    "minDiscountQty": 60.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Fatromine 100 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5099",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Fatromine 250 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5555",
    "minDiscountQty": 12.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Fatroseal 60 jeringas"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5556",
    "minDiscountQty": 8.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Fatroseal 120 jeringas"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5571",
    "minDiscountQty": 100.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Finvirus ECO 5 litros"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5572",
    "minDiscountQty": 100.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Finvirus ECO 25 litros"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5089",
    "minDiscountQty": 10.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Flavopectin 3 kg."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "10",
    "minDiscountQty": 8.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Gastozole 7 jeringas (Caballos)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5519",
    "minDiscountQty": 500.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "GentaVet 500 g"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5045",
    "minDiscountQty": 100.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Idrion 1 Litro"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5596",
    "minDiscountQty": 80.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Ketabel 25 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5318",
    "minDiscountQty": 90.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Ketofarm 100 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5319",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Ketofarm 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5483",
    "minDiscountQty": 50.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Keytil 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5599",
    "minDiscountQty": 80.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Lidobel 100 ml (caballos)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5176",
    "minDiscountQty": 240.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Liverfine 100 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5305",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Marbovet 2% 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5307",
    "minDiscountQty": 60.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Marbovet 10 % 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5389",
    "minDiscountQty": 500.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Masterflox 4% 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5526",
    "minDiscountQty": 1.0,
    "discountPct": 0.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Mastdecide (10 test)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5484",
    "minDiscountQty": 120.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Metabolik 500 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5311",
    "minDiscountQty": 10.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Nanut Foal 5 kg (leche caballos)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5478",
    "minDiscountQty": 10.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Neopradinol 10 kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5241",
    "minDiscountQty": 100.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Pasmopina 50 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5015",
    "minDiscountQty": 40.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Porcidax 25 Kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5427",
    "minDiscountQty": 50.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Pronestesic 50 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5536",
    "minDiscountQty": 200.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rapison 100 ml."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5570",
    "minDiscountQty": 18.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rifametrin (6 sprays)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5225",
    "minDiscountQty": 40.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rifacetril 4 jeringas"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5250",
    "minDiscountQty": 12.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rifacetril 24 jer."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5261",
    "minDiscountQty": 24.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rimastina 60 jeringas"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5326",
    "minDiscountQty": 10.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Rumidigest 35 (2 X 55 gr)"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5252",
    "minDiscountQty": 60.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Tirsanicol 250 ml"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5297",
    "minDiscountQty": 500.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "TirsanOral 4,3 litros"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5222",
    "minDiscountQty": 20.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Ulfaprisol 10 x 1 kg."
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5024",
    "minDiscountQty": 10.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Uriavit BC Carnitina 10 Kg"
  },
  {
    "supplierMatch": "fatro",
    "segment": "production",
    "itemCode": "5042",
    "minDiscountQty": 56.0,
    "discountPct": 4.0,
    "promoUnitPrice": null,
    "label": "Fatro · Ganadería · Oferta distribuidor",
    "note": "Vetidina AD3E 50 ml"
  }
];
