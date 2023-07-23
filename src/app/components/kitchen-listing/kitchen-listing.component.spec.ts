import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenListingComponent } from './kitchen-listing.component';

describe('KitchenListingComponent', () => {
  let component: KitchenListingComponent;
  let fixture: ComponentFixture<KitchenListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
