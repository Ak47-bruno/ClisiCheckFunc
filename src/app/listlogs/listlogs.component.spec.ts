import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlogsComponent } from './listlogs.component';

describe('ListlogsComponent', () => {
  let component: ListlogsComponent;
  let fixture: ComponentFixture<ListlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlogsComponent]
    });
    fixture = TestBed.createComponent(ListlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
