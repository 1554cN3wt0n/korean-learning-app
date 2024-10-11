import { Routes } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { SentencesComponent } from './sentences/sentences.component';
import { HomeComponent } from './home/home.component';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarFlashcardsComponent } from './grammar/components/grammar-flashcards/grammar-flashcards.component';
import { VocabularyFlashcardsComponent } from './vocabulary/components/vocabulary-flashcards/vocabulary-flashcards.component';
import { VocabularyQuizComponent } from './vocabulary/components/vocabulary-quiz/vocabulary-quiz.component';
import { GrammarQuizComponent } from './grammar/components/grammar-quiz/grammar-quiz.component';
import { SentencesFlashcardsComponent } from './sentences/components/sentences-flashcards/sentences-flashcards.component';
import { SentencesQuizComponent } from './sentences/components/sentences-quiz/sentences-quiz.component';
import { TypingComponent } from './typing/typing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'vocabulary', component: VocabularyComponent, pathMatch: 'full' },
  {
    path: 'vocabulary/flashcards',
    component: VocabularyFlashcardsComponent,
    pathMatch: 'full',
  },
  {
    path: 'vocabulary/quiz',
    component: VocabularyQuizComponent,
    pathMatch: 'full',
  },
  { path: 'sentences', component: SentencesComponent, pathMatch: 'full' },
  {
    path: 'sentences/flashcards',
    component: SentencesFlashcardsComponent,
    pathMatch: 'full',
  },
  {
    path: 'sentences/quiz',
    component: SentencesQuizComponent,
    pathMatch: 'full',
  },
  { path: 'grammar', component: GrammarComponent, pathMatch: 'full' },
  {
    path: 'grammar/flashcards',
    component: GrammarFlashcardsComponent,
    pathMatch: 'full',
  },
  {
    path: 'grammar/quiz',
    component: GrammarQuizComponent,
    pathMatch: 'full',
  },
  { path: 'typing', component: TypingComponent, pathMatch: 'full' },
];
