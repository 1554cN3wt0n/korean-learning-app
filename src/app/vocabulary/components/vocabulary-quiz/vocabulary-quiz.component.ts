import { Component } from '@angular/core';
import { SelectionQuizComponent } from '../../../shared/selection-quiz/selection-quiz.component';
import { ResourcesService } from '../../../services/resources.service';
import { Question } from '../../../models/question';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-vocabulary-quiz',
  standalone: true,
  imports: [SelectionQuizComponent, CommonModule],
  templateUrl: './vocabulary-quiz.component.html',
  styleUrl: './vocabulary-quiz.component.scss',
})
export class VocabularyQuizComponent {
  questions!: Question[];
  loading!: boolean;
  numberOfQuestions: number = 20;
  constructor(
    private resourcesService: ResourcesService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.resourcesService
      .getWords()
      .then((data) => {
        let randomIdxs = this.utilsService.createAndShuffleArray(data.length);
        this.questions = [];
        for (let i = 0; i < this.numberOfQuestions; i++) {
          let question = data[randomIdxs.pop() || 0];
          let choice1 = data[randomIdxs.pop() || 0];
          let choice2 = data[randomIdxs.pop() || 0];
          let choice3 = data[randomIdxs.pop() || 0];
          let choices = [
            `${question[3]}`,
            `${choice1[3]}`,
            `${choice2[3]}`,
            `${choice3[3]}`,
          ];
          let correctAns = Math.floor(Math.random() * 4);
          [choices[0], choices[correctAns]] = [choices[correctAns], choices[0]];
          this.questions.push({
            question: `${question[2]}`,
            choices: choices,
            correctAnswer: correctAns,
          });
        }
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
