import { Component, ViewChild } from '@angular/core';
import { FlipCardComponent } from '../../../shared/flip-card/flip-card.component';
import { ResourcesService } from '../../../services/resources.service';
import { UtilsService } from '../../../services/utils.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocabulary-flashcards',
  standalone: true,
  imports: [FlipCardComponent, MatIconModule, CommonModule],
  templateUrl: './vocabulary-flashcards.component.html',
  styleUrl: './vocabulary-flashcards.component.scss',
})
export class VocabularyFlashcardsComponent {
  listWords!: any[][];
  randomIdxs!: number[];
  idx!: number;
  loading!: boolean;
  numOfWords: number = 20;
  finishReview: boolean = false;

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
      .getWords()
      .then((data: any[]) => {
        this.listWords = [];
        for (let i = 0; i < this.numOfWords; i++) {
          let j = Math.floor(Math.random() * data.length);
          this.listWords.push(data.splice(j, 1)[0]);
        }
        this.randomIdxs = this.utilsService.createAndShuffleArray(
          this.listWords.length
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
