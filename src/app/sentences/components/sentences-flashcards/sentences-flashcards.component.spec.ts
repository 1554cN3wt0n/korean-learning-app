import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesFlashcardsComponent } from './sentences-flashcards.component';

describe('SentencesFlashcardsComponent', () => {
  let component: SentencesFlashcardsComponent;
  let fixture: ComponentFixture<SentencesFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentencesFlashcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentencesFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
