import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchOnlyComponent } from './french-only.component';

describe('FrenchOnlyComponent', () => {
  let component: FrenchOnlyComponent;
  let fixture: ComponentFixture<FrenchOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
