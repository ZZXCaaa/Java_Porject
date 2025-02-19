import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateComponent } from './initiate.component';

describe('InitiateComponent', () => {
  let component: InitiateComponent;
  let fixture: ComponentFixture<InitiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
