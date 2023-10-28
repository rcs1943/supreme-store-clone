import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavMenuComponent } from './home-nav-menu.component';

describe('HomeNavMenuComponent', () => {
  let component: HomeNavMenuComponent;
  let fixture: ComponentFixture<HomeNavMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeNavMenuComponent]
    });
    fixture = TestBed.createComponent(HomeNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
