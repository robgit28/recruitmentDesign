import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineOptimisationComponent } from './search-engine-optimisation.component';

describe('SearchEngineOptimisationComponent', () => {
  let component: SearchEngineOptimisationComponent;
  let fixture: ComponentFixture<SearchEngineOptimisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEngineOptimisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEngineOptimisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
