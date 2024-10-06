import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent {
  constructor(private router: Router) {}
  goToFlashcards() {
    this.router.navigate(['grammar/flashcards']);
  }
  goToQuiz() {
    this.router.navigate(['grammar/quiz']);
  }
}
