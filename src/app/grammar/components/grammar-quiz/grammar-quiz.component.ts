import { Component } from '@angular/core';
import { SelectionQuizComponent } from '../../../shared/selection-quiz/selection-quiz.component';

@Component({
  selector: 'app-grammar-quiz',
  standalone: true,
  imports: [SelectionQuizComponent],
  templateUrl: './grammar-quiz.component.html',
  styleUrl: './grammar-quiz.component.scss',
})
export class GrammarQuizComponent {}
