import { Component, ViewChild } from '@angular/core';
import { FlipCardComponent } from '../shared/flip-card/flip-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ResourcesService } from '../services/resources.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [FlipCardComponent, CommonModule, MatIconModule],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.scss',
})
export class GrammarComponent {
  grammarList!: any[][];
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
      .getGrammar()
      .then((data) => {
        this.grammarList = data;
        this.randomIdxs = this.utilsService.createAndShuffleArray(
          this.grammarList.length
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
