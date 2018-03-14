import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetslotComponent } from './getslot.component';

describe('GetslotComponent', () => {
  let component: GetslotComponent;
  let fixture: ComponentFixture<GetslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
