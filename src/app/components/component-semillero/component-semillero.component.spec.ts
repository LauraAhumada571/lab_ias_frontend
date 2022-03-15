import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSemilleroComponent } from './component-semillero.component';

describe('ComponentSemilleroComponent', () => {
  let component: ComponentSemilleroComponent;
  let fixture: ComponentFixture<ComponentSemilleroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSemilleroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
