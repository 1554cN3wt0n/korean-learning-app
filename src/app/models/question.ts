export interface Question {
  question: string;
  choices: string[];
  correctAnswer: number; // The index of the correct answer in the choices array
}
