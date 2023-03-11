import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharItemComponent } from './char-item.component';

describe('CharItemComponent', () => {
  let component: CharItemComponent;
  let fixture: ComponentFixture<CharItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
