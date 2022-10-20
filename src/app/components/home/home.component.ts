import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p i18n>La locale courante est : {{locale}}</p>
        <p i18n>Bienvenue sur notre super site</p>
        <p i18n>Dernière mise à jour effectuée il y a {{lastUpdateDays}} jours</p>
        <p>{{text}}</p>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    lastUpdateDays = 2

    text: string = 'text text text'


    constructor(@Inject(LOCALE_ID) public locale: string) {
    }

    ngOnInit(): void {
        this.text = $localize `:meaning|desc@@identifiant:textes traduit par angular`
    }



}
