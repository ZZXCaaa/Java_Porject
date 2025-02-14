import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDemoComponent } from './questionnaire-demo.component';

describe('QuestionnaireDemoComponent', () => {
  let component: QuestionnaireDemoComponent;
  let fixture: ComponentFixture<QuestionnaireDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionnaireDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
