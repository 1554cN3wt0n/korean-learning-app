import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyQuizComponent } from './vocabulary-quiz.component';

describe('VocabularyQuizComponent', () => {
  let component: VocabularyQuizComponent;
  let fixture: ComponentFixture<VocabularyQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
