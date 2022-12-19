import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddministryComponent } from './addministry.component';

describe('AddministryComponent', () => {
  let component: AddministryComponent;
  let fixture: ComponentFixture<AddministryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddministryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddministryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
