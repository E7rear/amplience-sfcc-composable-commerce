<div align="center">
<h1>The Progressive Web App (PWA) Kit with Amplience</h1>
</div>

[🏖️ View Amplience Demo](https://ascc-production.mobify-storefront.com/)

The Amplience PWA Kit is a storefront technology for headless commerce using [Amplience APIs](https://amplience.com/docs/integration/reference.html), Salesforce Commerce APIs and React. It provides front-end developers with a more flexible and agile approach to build and maintain modern eCommerce experiences with the use of [Amplience](https://amplience.com/)

![Amplience pwa-kit banner)](./amplience-automation/media/hero.png)

___

# Amplience specifics
This is a version of the Retail React app with a starting point for Amplience fundamentals. The documentation below is 'as-is' from Salesforce. For Amplience specifics please see the following.

> Note: This code is built against the code version @latest at the time which was PWAKit v2.2.0 released on August 27th 2022: https://github.com/SalesforceCommerceCloud/pwa-kit/releases/tag/v2.2.0

If you are using an v2.1.0, either upgrade using this code base or use a previous Amplience version [v1.2.0](https://github.com/amplience/amplience-sfcc-composable-commerce/releases/tag/v1.2.0) with the capabilities at that time.

## Amplience Contents
* [Overview](./docs/amplience/overview.md)
* [Salesforce Commerce Cloud Setup](./docs/amplience/sfcc-setup.md)
* [Security Updates](./docs/amplience/security-updates.md) 
* [Amplience API](./docs/amplience/amplience-api.md)
* [Amplience Components List](./docs/amplience/amplience-components-list.md)
* [AmplienceWrapper Component](./docs/amplience/ampliencewrapper-component.md)
* [Navigation](./docs/amplience/navigation.md)
* [Product Listing Page (PLP) Management](./docs/amplience/product-listing-page-management.md)
* [Visualization](docs/amplience/visualization.md)
* [Preview](docs/amplience/preview.md)
* [Amplience Account](docs/amplience/amplience-account.md)
* [Automation](docs/amplience/automation.md)  

## Known Limitations

### Localisation
By default we point to the same SFCC instance as the vanilla Retail React app. If you are pointing to your own SFCC sandbox, you should ensure that you have localisation enabled. See guide at [Localization README.md](./app/translations/README.md), [Overview](./docs/amplience/overview.md) and  [Salesforce Commerce Cloud Setup](./docs/amplience/sfcc-setup.md)


# The Retail React App

A project template that includes an isomorphic JavaScript storefront and [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) built using [React](https://reactjs.org/) and [Express](https://expressjs.com/). It uses a modern headless architecture that enables developers to decouple front-end code from back-end systems. It leverages popular open-source libraries in the React ecosystem, such as [Chakra UI](https://chakra-ui.com/) components, [Emotion](https://emotion.sh/docs/introduction) (CSS-in-JS), [Webpack](https://webpack.js.org/), and many more.

Developers don’t have to worry about the underlying infrastructure, whether they’re developing their app locally, deploying it to a [Managed Runtime](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/mrt-overview.html) environment, or testing the app live.

## Requirements

-   Node 14
-   npm 6.14.4 or later

## Get Started

To start your web server for local development, run the following command in your project directory:

```bash
npm start
```

Now that the development server is running, you can open a browser and preview your commerce app:

-   Go to http://localhost:3000/

## Localization

See the [Localization README.md](./app/translations/README.md) for important setup instructions for localization.

## Configuration Files

The Retail React App's configuration files are located in the `app/config` folder. For more details, see [Configuration Files](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/configuration-options.html) in the documentation.

## Documentation

The full documentation for PWA Kit and Managed Runtime is hosted on the [Salesforce Developers](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/overview) portal.

### Useful Links:

-   [Get Started](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html)
-   [Skills for Success](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/skills-for-success.html)
-   [Set Up API Access](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/setting-up-api-access.html)
-   [Configuration Options](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/configuration-options.html)
-   [Proxy Requests](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/proxying-requests.html)
-   [Push and Deploy Bundles](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/pushing-and-deploying-bundles.html)
-   [The Retail React App](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/retail-react-app.html)
-   [Rendering](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/rendering.html)
-   [Routing](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/routing.html)
-   [Phased Headless Rollouts](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/phased-headless-rollouts.html)
-   [Launch Your Storefront](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/launching-your-storefront.html)
