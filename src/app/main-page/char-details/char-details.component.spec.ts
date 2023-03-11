import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetailsComponent } from './char-details.component';

describe('CharDetailsComponent', () => {
  let component: CharDetailsComponent;
  let fixture: ComponentFixture<CharDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
