import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseriposlistComponent } from './useriposlist.component';

describe('UseriposlistComponent', () => {
  let component: UseriposlistComponent;
  let fixture: ComponentFixture<UseriposlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseriposlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseriposlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
