import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaurieComponent } from './laurie.component';

describe('LaurieComponent', () => {
  let component: LaurieComponent;
  let fixture: ComponentFixture<LaurieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaurieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaurieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
