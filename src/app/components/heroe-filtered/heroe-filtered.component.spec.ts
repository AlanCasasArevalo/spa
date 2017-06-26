import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFilteredComponent } from './heroe-filtered.component';

describe('HeroeFilteredComponent', () => {
  let component: HeroeFilteredComponent;
  let fixture: ComponentFixture<HeroeFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
