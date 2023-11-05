import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPreviewComponent } from './all-preview.component';

describe('AllPreviewComponent', () => {
  let component: AllPreviewComponent;
  let fixture: ComponentFixture<AllPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllPreviewComponent]
    });
    fixture = TestBed.createComponent(AllPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
