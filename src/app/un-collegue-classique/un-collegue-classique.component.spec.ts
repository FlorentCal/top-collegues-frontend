import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueClassiqueComponent } from './un-collegue-classique.component';

describe('UnCollegueClassiqueComponent', () => {
  let component: UnCollegueClassiqueComponent;
  let fixture: ComponentFixture<UnCollegueClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueClassiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
