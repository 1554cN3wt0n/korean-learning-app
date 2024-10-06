import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyFlashcardsComponent } from './vocabulary-flashcards.component';

describe('VocabularyFlashcardsComponent', () => {
  let component: VocabularyFlashcardsComponent;
  let fixture: ComponentFixture<VocabularyFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyFlashcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
