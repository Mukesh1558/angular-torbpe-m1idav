import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScandetailsComponent } from './scandetails.component';

describe('ScandetailsComponent', () => {
  let component: ScandetailsComponent;
  let fixture: ComponentFixture<ScandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
