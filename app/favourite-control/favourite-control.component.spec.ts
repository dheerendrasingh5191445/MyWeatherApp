import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteControlComponent } from './favourite-control.component';

describe('FavouriteControlComponent', () => {
  let component: FavouriteControlComponent;
  let fixture: ComponentFixture<FavouriteControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
