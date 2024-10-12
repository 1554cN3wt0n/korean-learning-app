import { Component } from '@angular/core';
import { ResourcesService } from '../../../services/resources.service';
import { SelectionQuizComponent } from '../../../shared/selection-quiz/selection-quiz.component';
import { Question } from '../../../models/question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sentences-quiz',
  standalone: true,
  imports: [CommonModule, SelectionQuizComponent],
  templateUrl: './sentences-quiz.component.html',
  styleUrl: './sentences-quiz.component.scss',
})
export class SentencesQuizComponent {
  questions: any[] = [];
  words: any[] = [];

  constructor(private resourcesService: ResourcesService) {}

  ngOnInit() {
    this.questions = [];
    this.words = [];
    this.resourcesService
      .getWords()
      .then((data: any) => {
        data.map((e: any[]) => {
          this.words.push(e[2]);
        });
      })
      .then(() => {
        this.resourcesService.getAnalyzedSentences().then((data: any) => {
          data.map((e: any) => {
            this.questions.push(this.generateQuestion(e));
          });
        });
      });
  }

  generateQuestion(data: any) {
    let idx = Math.floor(Math.random() * data.parts.length);
    let ans = data.parts[idx][0];
    let question: string[] = [];
    data.parts.forEach((e: any, i: number) => {
      if (i == idx) {
        question.push('____');
      } else {
        question.push(e[0]);
      }
    });
    let choices = [];
    for (let i = 0; i < 3; i++) {
      choices.push(this.words[Math.floor(Math.random() * this.words.length)]);
    }
    choices.push(ans);
    let correctIdx = Math.floor(Math.random() * 4);
    [choices[correctIdx], choices[3]] = [choices[3], choices[correctIdx]];
    return {
      question:
        `<span>${question.join(' ')}</span><br><span>${data.english}</span>` ||
        '',
      choices: choices,
      correctAnswer: correctIdx,
    } as Question;
  }
}
