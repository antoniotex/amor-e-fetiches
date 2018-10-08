import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueSensualComponent } from './boutique-sensual.component';

describe('BoutiqueSensualComponent', () => {
  let component: BoutiqueSensualComponent;
  let fixture: ComponentFixture<BoutiqueSensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueSensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueSensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
