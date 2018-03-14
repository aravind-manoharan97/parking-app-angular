import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotedListComponent } from './alloted-list.component';

describe('AllotedListComponent', () => {
  let component: AllotedListComponent;
  let fixture: ComponentFixture<AllotedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
