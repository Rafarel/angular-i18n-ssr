import {NgModule} from '@angular/core';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {I18nService} from "./services/i18n.service";

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
    }
];

export function routesFactory()
{
    return (i18nService: I18nService): Routes => {
        return routesI18n.map(route => {
            const localized = route.data!['locales'][i18nService.locale] as LocalizedRouteData;
            route = {...route, ...localized}
            return route;
        });
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
