import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubNavComponent } from './header-sub-nav.component';

describe('HeaderSubNavComponent', () => {
  let component: HeaderSubNavComponent;
  let fixture: ComponentFixture<HeaderSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
