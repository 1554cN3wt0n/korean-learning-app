import { Component, ViewChild } from '@angular/core';
import { FlipCardComponent } from '../shared/flip-card/flip-card.component';
import { ResourcesService } from '../services/resources.service';
import { UtilsService } from '../services/utils.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [FlipCardComponent, MatIconModule, CommonModule],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
})
export class VocabularyComponent {
  listWords!: any[][];
  randomIdxs!: number[];
  idx!: number;
  loading!: boolean;

  @ViewChild('card') card!: FlipCardComponent;

  constructor(
    private resourcesService: ResourcesService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.resourcesService
      .getWords()
      .then((data) => {
        this.listWords = data;
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
    this.idx = this.randomIdxs.pop() || 0;
  }

  reviewLater() {
    this.card.isFlipped = false;
    let prevIdx = this.idx;
    this.idx = this.randomIdxs.pop() || 0;
    this.randomIdxs.push(prevIdx);
  }
}
