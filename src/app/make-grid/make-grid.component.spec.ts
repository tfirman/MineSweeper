import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGridComponent } from './make-grid.component';

describe('MakeGridComponent', () => {
  let component: MakeGridComponent;
  let fixture: ComponentFixture<MakeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
