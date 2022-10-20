# ssr-i18n

## Routing i18n

Routes are computed by a factory to be able to have different route per locale.

## Pre-rendering 

With a custom i18n routing in place, the base pre-rendering process is not functional anymore because `prerender` will render each route once with the default locale because routes are supposed to be the same no matter the locale (except baseHref like /fr/ or /en/). So you'll have by default the following routes rendered `/fr/contactez-nous` and `/en/contactez-nous` instead of `/fr/contactez-nous` and `/en/contact-us`. 

Pre-rendering have to be done for each language to keep separate i18n routes.
To achieve this, we have to disable the `guessRoutes` option and declare manually routes to be pre-rendered for each locale.
We also have to prevent the build process to delete output for previous pre-renderer locale by setting the `deleteOutputPath` to `false`.

Best workflow I found is :
- Delete the dist folder to start fresh.
- Pre-render the `fr` locale.
- Pre-render the `en` locale without deleting the output path.
- Copy the proxy-server.js in the `dist/ssr` folder.

## Serving SSR i18n app

To serve the app, we have to use the proxy-server.js file to serve the app for each locale.


## Notes

Generate a new component
```
ng g c components/<component-name> -m app.module
```
