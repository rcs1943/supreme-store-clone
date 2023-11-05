import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavigatorComponent } from './category-navigator.component';

describe('CategoryNavigatorComponent', () => {
  let component: CategoryNavigatorComponent;
  let fixture: ComponentFixture<CategoryNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategoryNavigatorComponent]
    });
    fixture = TestBed.createComponent(CategoryNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
