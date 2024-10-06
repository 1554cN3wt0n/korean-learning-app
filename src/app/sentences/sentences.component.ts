import { Component, ViewChild } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { FlipCardComponent } from '../shared/flip-card/flip-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sentences',
  standalone: true,
  imports: [FlipCardComponent, CommonModule, MatIconModule],
  templateUrl: './sentences.component.html',
  styleUrl: './sentences.component.scss',
})
export class SentencesComponent {
  sentencesData!: any[][];
  randomIdxs!: number[];
  idx!: number;
  loading: boolean = true;

  completedSentences = 0;
  @ViewChild('card') card!: FlipCardComponent;

  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.loading = true;
    this.resourcesService
      .getSentences()
      .then((data) => {
        this.sentencesData = data;
        this.randomIdxs = this.createAndShuffleArray(this.sentencesData.length);
        this.idx = this.randomIdxs.pop() || 0;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextSentence() {
    this.card.isFlipped = false;
    this.idx = this.randomIdxs.pop() || 0;
  }

  reviewLater() {
    this.card.isFlipped = false;
    let prevIdx = this.idx;
    this.idx = this.randomIdxs.pop() || 0;
    this.randomIdxs.push(prevIdx);
  }

  createAndShuffleArray(n: number): number[] {
    const array = Array.from({ length: n }, (_, index) => index);

    // Shuffle the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }

    return array;
  }
}
