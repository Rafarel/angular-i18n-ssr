import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    template: `
        <p>
            contactez nous en utilisant ce formulaire
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
