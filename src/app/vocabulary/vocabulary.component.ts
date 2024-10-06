import { Component } from '@angular/core';
import { FlipCardComponent } from '../shared/flip-card/flip-card.component';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [FlipCardComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
})
export class VocabularyComponent {}
