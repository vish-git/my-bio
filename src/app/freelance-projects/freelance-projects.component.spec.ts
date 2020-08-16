import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceProjectsComponent } from './freelance-projects.component';

describe('FreelanceProjectsComponent', () => {
  let component: FreelanceProjectsComponent;
  let fixture: ComponentFixture<FreelanceProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
