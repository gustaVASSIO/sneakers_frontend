import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselComponent } from './carrossel.component';
import { MatIconModule } from '@angular/material/icon';

describe('CarrosselComponent', () => {
  let component: CarrosselComponent;
  let fixture: ComponentFixture<CarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrosselComponent],
      imports:[
        MatIconModule
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CarrosselComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have options to alter image', () => {
    const fixture = TestBed.createComponent(CarrosselComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;    
    expect(compiled.getElementsByClassName('arrow-btn').length).toEqual(2);
  });
});
