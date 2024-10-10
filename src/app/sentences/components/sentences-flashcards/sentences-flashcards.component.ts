import { Component, ViewChild } from '@angular/core';
import { ResourcesService } from '../../../services/resources.service';
import { FlipCardComponent } from '../../../shared/flip-card/flip-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-sentences-flashcards',
  standalone: true,
  imports: [FlipCardComponent, CommonModule, MatIconModule],
  templateUrl: './sentences-flashcards.component.html',
  styleUrl: './sentences-flashcards.component.scss',
})
export class SentencesFlashcardsComponent {
  sentencesData!: any[][];
  randomIdxs!: number[];
  idx!: number;
  loading: boolean = true;
  numOfWords: number = 20;
  finishReview: boolean = false;

  completedSentences = 0;
  @ViewChild('card') card!: FlipCardComponent;

  constructor(
    private resourcesService: ResourcesService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.resourcesService
      .getSentences()
      .then((data) => {
        this.sentencesData = [];
        for (let i = 0; i < this.numOfWords; i++) {
          let j = Math.floor(Math.random() * data.length);
          this.sentencesData.push(data.splice(j, 1)[0]);
        }
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
    if (this.randomIdxs.length == 0) {
      this.finishReview = true;
      return;
    }
    this.idx = this.randomIdxs.pop() || 0;
  }

  reviewLater() {
    this.card.isFlipped = false;
    this.randomIdxs = [this.idx, ...this.randomIdxs];
    this.idx = this.randomIdxs.pop() || 0;
  }

  restart() {
    this.finishReview = false;
    this.loadData();
  }
}
