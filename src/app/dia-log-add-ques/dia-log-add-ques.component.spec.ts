import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaLogAddQuesComponent } from './dia-log-add-ques.component';

describe('DiaLogAddQuesComponent', () => {
  let component: DiaLogAddQuesComponent;
  let fixture: ComponentFixture<DiaLogAddQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaLogAddQuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaLogAddQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
