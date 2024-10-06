import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
})
export class VocabularyComponent {
  constructor(private router: Router) {}
  goToFlashcards() {
    this.router.navigate(['vocabulary/flashcards']);
  }
  goToQuiz() {
    this.router.navigate(['vocabulary/quiz']);
  }
}
