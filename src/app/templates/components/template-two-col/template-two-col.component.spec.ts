import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTwoColComponent } from './template-two-col.component';

describe('TemplateTwoColComponent', () => {
  let component: TemplateTwoColComponent;
  let fixture: ComponentFixture<TemplateTwoColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTwoColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTwoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
