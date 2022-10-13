import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p i18n>Bienvenue sur notre site</p>
        <p i18n>Dernière mise à jour effectuée il y a {{lastUpdateDays}} jours</p>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    lastUpdateDays = 2

    constructor() {
    }

    ngOnInit(): void {
    }

}
