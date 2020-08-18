import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalReferencesComponent } from './technical-references.component';

describe('TechnicalReferencesComponent', () => {
  let component: TechnicalReferencesComponent;
  let fixture: ComponentFixture<TechnicalReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
