import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p>tada {{locale}}</p>
        <p i18n>Bienvenue sur notre super site</p>
        <p i18n>Dernière mise à jour effectuée il y a {{lastUpdateDays}} jours</p>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    lastUpdateDays = 2

    constructor() {
    constructor(@Inject(LOCALE_ID) public locale: string) {
    }

    ngOnInit(): void {
    }

}
