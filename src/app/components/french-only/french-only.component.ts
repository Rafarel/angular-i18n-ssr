import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-french-only',
  template: `
    <p>
      Cette page n'existe qu'en français !
    </p>
  `,
  styles: [
  ]
})
export class FrenchOnlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
