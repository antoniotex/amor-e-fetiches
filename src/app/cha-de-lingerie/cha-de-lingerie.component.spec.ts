import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaDeLingerieComponent } from './cha-de-lingerie.component';

describe('ChaDeLingerieComponent', () => {
  let component: ChaDeLingerieComponent;
  let fixture: ComponentFixture<ChaDeLingerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaDeLingerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaDeLingerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
