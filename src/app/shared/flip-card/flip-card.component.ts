import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss',
})
export class FlipCardComponent {
  @Input() front: string = 'Front';
  @Input() back: string = 'Back';

  @Input() frontTitle: string = '한국어';
  @Input() frontDetail: string = '';

  @Input() backTitle: string = 'English';
  @Input() backDetail: string = '';

  isFlipped: boolean = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
