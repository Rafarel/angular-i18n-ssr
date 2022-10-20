import {NgModule} from '@angular/core';
import {Route, RouterModule, ROUTES, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {I18nService} from "./services/i18n.service";
import {FrenchOnlyComponent} from "./components/french-only/french-only.component";

interface LocalizedRouteData {
    path: string,
    title: string
}

export const routesI18n: Routes = [
    {
        component: HomeComponent,
        data: {
            locales: {
                fr: {path: '', title: 'Accueil'},
                en: {path: '', title: 'Home'},
            }
        }
    },
    {
        component: ContactComponent,
        data: {
            locales: {
                fr: {path: 'contactez-nous', title: 'Contactez nous'},
                en: {path: 'contact-us', title: 'Contact us'},
            }
        }
    },
    // This route does not exist in english
    {
        component: FrenchOnlyComponent,
        data: {
            locales: {
                fr: {path: 'francais-seulement', title: 'Page Française'}
            }
        }
    }
];

export function routesFactory()
{
    const getLocalizedRouteData = (route: Route, locale: string): LocalizedRouteData | undefined =>
    {
        if (route.data && route.data['locales'] && route.data['locales'][locale])
            return route.data['locales'][locale]

        return undefined
    }

    return (i18nService: I18nService): Routes => {
        return routesI18n
            .filter(route => getLocalizedRouteData(route, i18nService.locale))
            .map(route => { return {...route, ...getLocalizedRouteData(route, i18nService.locale)} });
    }
}

@NgModule({
    imports: [RouterModule.forRoot([], {
        initialNavigation: 'enabledBlocking'
    })],
    exports: [RouterModule],
    providers: [
        {
            provide: ROUTES,
            useFactory: routesFactory(),
            deps: [I18nService],
            multi: true
        }
    ]
})
export class AppRoutingModule {
}
