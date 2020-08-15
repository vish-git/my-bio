import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDairyComponent } from './tech-dairy.component';

describe('TechDairyComponent', () => {
  let component: TechDairyComponent;
  let fixture: ComponentFixture<TechDairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechDairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
