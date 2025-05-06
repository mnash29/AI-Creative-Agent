This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Clerk Authentication

This app uses [Clerk](https://clerk.com) for authentication. Create an account and follow the docs to create an application and import necessary files.

## Schematic

This app uses [SchematicHQ](https://schematichq.com) for handling pricing and metering, plans & enhancements, smart flags, billing components, etc. which uses [Stripe](https://stripe.com) under the hood.

### Setup

1. Create `Schematic` account.
2. Create/Connect your `Stripe` account.
    * `Integrations` > `Stripe Integration` > `Connect Stripe`
    * Fill out all required business information
3. Create a `product` in Stripe
    * `Product Catalog` > `Add product`
    * Create one product for each plan tier
        * Free
        * Starter - $9.99 monthly
        * Creator - $29.99 monthly
    * Optional: Create annual plans for each paid product
        * Select product
        * Add new pricing by clicking `+`
        * Set `interval` to `Yearly`
4. Import new data in `Schematic`
    * `Integrations` > `Stripe Integration` > `Import new data`
5. Create `Catalog plan`
    * `Catalog` > `Create plan`
    * Define a plan for each `product` in Stripe
        * Default type is `Free` in `Billing`
        * Select `Paid` in billing for any paid products
6. Add `Entitlements` for each plan that enables certain `features` available for each product.
    * Define a `Feature` to unlock plan entitlements, overrides, and track feature utilization
        * `Feature` > `Create a feature`
        * Set access control type
            * `Boolean` features are On or Off, example: Single Sign On
            * `Event-based` features are defined by behavior, example: Search or Query
            * `Trait-based` features are defined by Company or User trait, example: Seats
        * Set a flag for targeting on the backend
        * Set an `event` if using event-based type
    * Set `entitlements` for each `feature`
        * `Features` > `Add plan entitlement`
7. Create `Components` like a `Customer Portal` for displaying billing information at checkout
8. Embed the components into the app. See [Docs](https://docs.schematichq.com/components/set-up)

### Integration

```bash
# Install dependencies
npm install @schematichq/schematic-react
# or
yarn add @schematichq/schematic-react
# or
pnpm add @schematichq/schematic-react
```

Setup `SchematicProvider`

```tsx
// app/page.tsx
`use client`

import { SchematicProvider } from "@schematichq/schematic-react";

ReactDOM.render(
    <SchematicProvider publishableKey="your-publishable-key">
        <App />
    </SchematicProvider>,
    document.getElementById("root"),
);
```

```tsx
// components/schematic-wrapper.tsx
import { useSchematicEvents } from "@schematichq/schematic-react";

const SchematicWrapper = ({children}: {children: React.ReactNode}) => {
  const { identify } = useSchematicEvents();

  useEffect(() => {
    identify({
      company: {
        keys: { id: "company123" },
      },
    });
  }, [identify]);

  return childrem;
};

```

## Convex 