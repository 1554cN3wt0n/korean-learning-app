import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesQuizComponent } from './sentences-quiz.component';

describe('SentencesQuizComponent', () => {
  let component: SentencesQuizComponent;
  let fixture: ComponentFixture<SentencesQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentencesQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentencesQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
