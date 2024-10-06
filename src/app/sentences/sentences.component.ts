import { Component, ViewChild } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { FlipCardComponent } from '../shared/flip-card/flip-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../services/utils.service';

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

  constructor(
    private resourcesService: ResourcesService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.resourcesService
      .getSentences()
      .then((data) => {
        this.sentencesData = data;
        this.randomIdxs = this.utilsService.createAndShuffleArray(
          this.sentencesData.length
        );
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
}
