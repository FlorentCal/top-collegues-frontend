import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueCarrouselComponent } from './un-collegue-carrousel.component';

describe('UnCollegueCarrouselComponent', () => {
  let component: UnCollegueCarrouselComponent;
  let fixture: ComponentFixture<UnCollegueCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
