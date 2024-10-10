import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../models/question';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-selection-quiz',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './selection-quiz.component.html',
  styleUrl: './selection-quiz.component.scss',
})
export class SelectionQuizComponent {
  score = 0;
  @Input()
  questions: Question[] = [];

  @Output()
  endOfQuiz: EventEmitter<any> = new EventEmitter();

  currentQuestionIndex: number = 0;
  currentQuestion: Question = this.questions[this.currentQuestionIndex];
  selectedAnswer: number | null = null;
  isCorrect: boolean = false;
  isAnswered: boolean = false;

  ngOnInit(): void {
    this.loadQuestion();
  }

  // Load the current question based on index
  loadQuestion(): void {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedAnswer = null;
    this.isCorrect = false;
    this.isAnswered = false;
  }

  // Check the selected answer
  checkAnswer(choiceIndex: number): void {
    this.selectedAnswer = choiceIndex;
    this.isCorrect = choiceIndex === this.currentQuestion.correctAnswer;
    this.isAnswered = true;
    if (this.isCorrect) this.score += 1;
  }

  // Load the next question
  nextQuestion(): void {
    this.currentQuestionIndex++;

    // If there are no more questions, restart the game (or you can handle it differently)
    if (this.currentQuestionIndex >= this.questions.length) {
      this.endOfQuiz.emit({
        score: this.score,
      });
      this.currentQuestionIndex = 0;
    }

    this.loadQuestion();
  }
}
