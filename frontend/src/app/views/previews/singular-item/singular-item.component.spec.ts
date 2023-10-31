import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularItemComponent } from './singular-item.component';

describe('SingularItemComponent', () => {
  let component: SingularItemComponent;
  let fixture: ComponentFixture<SingularItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SingularItemComponent]
    });
    fixture = TestBed.createComponent(SingularItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
