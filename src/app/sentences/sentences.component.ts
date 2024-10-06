import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentences',
  standalone: true,
  imports: [],
  templateUrl: './sentences.component.html',
  styleUrl: './sentences.component.scss',
})
export class SentencesComponent {
  constructor(private router: Router) {}
  goToFlashcards() {
    this.router.navigate(['sentences/flashcards']);
  }
  goToQuiz() {
    this.router.navigate(['sentences/quiz']);
  }
}
