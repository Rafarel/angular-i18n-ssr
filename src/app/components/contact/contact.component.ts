import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    template: `
        <p i18n>
            Contactez nous en utilisant ce formulaire
        </p>
    `,
    styles: []
})
export class ContactComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
