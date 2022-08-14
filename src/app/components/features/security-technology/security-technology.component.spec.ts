import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTechnologyComponent } from './security-technology.component';

describe('SecurityTechnologyComponent', () => {
  let component: SecurityTechnologyComponent;
  let fixture: ComponentFixture<SecurityTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityTechnologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
