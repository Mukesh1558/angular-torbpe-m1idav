import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultifilterComponent } from './multifilter.component';

describe('MultifilterComponent', () => {
  let component: MultifilterComponent;
  let fixture: ComponentFixture<MultifilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultifilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultifilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
