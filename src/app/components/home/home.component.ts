import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p>Bienvenue sur notre site</p>
        <p>Dernière mise à jour effectuée il y a {{lastUpdateDays}} jours</p>
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
