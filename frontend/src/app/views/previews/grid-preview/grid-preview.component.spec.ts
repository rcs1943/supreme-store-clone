import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPreviewComponent } from './grid-preview.component';

describe('GridPreviewComponent', () => {
  let component: GridPreviewComponent;
  let fixture: ComponentFixture<GridPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GridPreviewComponent]
    });
    fixture = TestBed.createComponent(GridPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
