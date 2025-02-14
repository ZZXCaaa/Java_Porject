import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologAdministratorComponent } from './diolog-administrator.component';

describe('DiologAdministratorComponent', () => {
  let component: DiologAdministratorComponent;
  let fixture: ComponentFixture<DiologAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiologAdministratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiologAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
