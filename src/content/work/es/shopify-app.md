---
title: "Diseñar y publicar Easy Upsell, una app de upsell post-compra para comercios en Shopify"
client: "Producto independiente"
role: "Desarrollador solo"
period: "2026"
stack: ["React Router 7", "App Bridge", "Polaris Web Components", "Admin GraphQL API", "Shopify Functions", "Prisma"]
summary: "Diseñé, construí y publiqué una app de Shopify en solitario — descuentos en checkout vía una Shopify Function, disponible en el Shopify App Store — que demuestra conocimiento de plataforma, no solo edición de temas."
order: 1
---

## Problema

Los comercios quieren ofrecer upsells post-compra — un producto complementario ofrecido después de agregar un producto disparador al carrito, opcionalmente con descuento — sin pagar por una app todo-en-uno pesada ni programar a mano la lógica de descuentos en el checkout. La mayoría de las soluciones existentes no pueden aplicar un descuento automático real en el checkout, o crean un descuento por cada oferta, lo que choca directamente con el límite de Shopify de descuentos automáticos por tienda.

## Acción

Construida como una app embebida de Shopify sobre React Router 7 (el framework actual de Shopify para apps, sucesor de Remix), con Polaris Web Components para la interfaz de administración y App Bridge para el embebido. La autenticación OAuth y el almacenamiento de sesión corren sobre el paquete oficial de Shopify con respaldo en Prisma. La Admin GraphQL API maneja todos los datos de productos y descuentos detrás de un wrapper de reintentos a medida — dos reintentos con backoff en respuestas 429/5xx, un timeout de 5 segundos por llamada, y búsquedas de IDs por lotes limitadas a los máximos de Shopify.

El descuento en el checkout corre a través de una Shopify Function en lugar de un descuento por oferta: la app crea un único descuento automático compartido por tienda, y la Function lee un atributo de línea de carrito `_easyupsell_discount` (por ejemplo, `percent:20`) para calcular el descuento real en el checkout — manteniendo la Function sin estado y evitando el límite de descuentos automáticos de Shopify. Si un comercio elimina ese descuento directamente desde el Admin de Shopify, una verificación de integridad desactiva las ofertas afectadas en lugar de simular un descuento falso a los clientes.

La facturación corre sobre la Billing API de Shopify bajo precios manuales: la app llama directamente a `appSubscriptionCreate` en lugar de `billing.request()` para evitar un problema de redirección de App Bridge en el contexto embebido, envía al comercio a la página de aprobación de Shopify mediante una navegación en el frame superior, y se re-autentica vía OAuth al regresar. Cada uno de los webhooks obligatorios de cumplimiento de Shopify (`customers/data_request`, `customers/redact`, `shop/redact`) está implementado y es idempotente — los IDs de webhook se persisten para que las entregas reintentadas, comunes después de despliegues, no se procesen dos veces — junto con `app/uninstalled` y `app/scopes_update`. Pasar la revisión de apps de Shopify significó cumplir sus requisitos de rendimiento y autenticación para apps embebidas, y documentar exactamente qué datos de la tienda toca la app y por qué.

## Resultado

198+ pruebas automatizadas (Vitest) cubren de extremo a extremo la lógica de descuentos crítica para el checkout. Disponible hoy en el Shopify App Store, construida y mantenida en solitario desde cero.
