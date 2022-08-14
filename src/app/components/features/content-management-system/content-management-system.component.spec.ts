import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementSystemComponent } from './content-management-system.component';

describe('ContentManagementSystemComponent', () => {
  let component: ContentManagementSystemComponent;
  let fixture: ComponentFixture<ContentManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
