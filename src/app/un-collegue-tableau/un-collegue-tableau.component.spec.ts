import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueTableauComponent } from './un-collegue-tableau.component';

describe('UnCollegueTableauComponent', () => {
  let component: UnCollegueTableauComponent;
  let fixture: ComponentFixture<UnCollegueTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
