import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipareSemComponent } from './participare-sem.component';

describe('ParticipareSemComponent', () => {
  let component: ParticipareSemComponent;
  let fixture: ComponentFixture<ParticipareSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipareSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipareSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
