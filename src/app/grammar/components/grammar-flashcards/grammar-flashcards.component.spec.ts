import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarFlashcardsComponent } from './grammar-flashcards.component';

describe('GrammarFlashcardsComponent', () => {
  let component: GrammarFlashcardsComponent;
  let fixture: ComponentFixture<GrammarFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarFlashcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrammarFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
