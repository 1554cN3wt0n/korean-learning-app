import { Routes } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { SentencesComponent } from './sentences/sentences.component';
import { HomeComponent } from './home/home.component';
import { GrammarComponent } from './grammar/grammar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'vocabulary', component: VocabularyComponent, pathMatch: 'full' },
  { path: 'sentences', component: SentencesComponent, pathMatch: 'full' },
  { path: 'grammar', component: GrammarComponent, pathMatch: 'full' },
];
