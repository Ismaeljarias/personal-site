---
title: "Building and shipping Easy Upsell, a post-purchase upsell app for Shopify merchants"
client: "Independent product"
role: "Solo developer"
period: "2026"
stack: ["React Router 7", "App Bridge", "Polaris Web Components", "Admin GraphQL API", "Shopify Functions", "Prisma"]
summary: "Designed, built, and shipped a Shopify app solo — checkout-time discounts via a Shopify Function, live on the Shopify App Store — proving platform-level engineering, not theme editing."
order: 1
---

## Problem

Merchants want to run post-purchase upsells — a complementary product offered after a trigger product is added to cart, optionally at a discount — without paying for a bloated all-in-one app or hand-rolling checkout discount logic. Most existing solutions either can't apply a real automatic discount at checkout or create one discount per offer, which runs straight into Shopify's per-shop limit on automatic discounts.

## Action

Built as a Shopify embedded app on React Router 7 (Shopify's current app framework, successor to Remix), with Polaris Web Components for the admin UI and App Bridge for embedding. OAuth and session storage run through Shopify's official Prisma-backed session storage package. The Admin GraphQL API handles all product and discount data behind a custom retry wrapper — two retries with backoff on 429/5xx, a 5-second timeout per call, and batched ID lookups capped at Shopify's limits.

Checkout discounting runs through a Shopify Function instead of a discount per offer: the app creates a single shared automatic discount per shop, and the Function reads a `_easyupsell_discount` cart-line attribute (e.g. `percent:20`) to compute the actual discount at checkout — keeping the Function stateless and avoiding Shopify's automatic-discount cap. If a merchant deletes that discount directly from Shopify Admin, an integrity check deactivates the affected offers rather than silently faking a discount to customers.

Billing runs on Shopify's Billing API under manual pricing: the app calls `appSubscriptionCreate` directly instead of `billing.request()` to avoid an App Bridge redirect issue in the embedded context, sends the merchant to Shopify's approval page via a top-frame navigation, and re-authenticates via OAuth on return. Every one of Shopify's mandatory compliance webhooks (`customers/data_request`, `customers/redact`, `shop/redact`) is implemented and idempotent — webhook IDs are persisted so retried deliveries, common after redeploys, don't double-process — alongside `app/uninstalled` and `app/scopes_update`. Passing app review meant clearing Shopify's embedded-app performance and auth requirements and documenting exactly what shop data the app touches and why.

## Result

198+ automated tests (Vitest) cover the checkout-critical discount logic end to end. Live on the Shopify App Store, built and maintained solo from the ground up.
