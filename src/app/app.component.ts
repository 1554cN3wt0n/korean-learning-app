import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  title = 'korean-learning-app';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
    this.drawer.toggle();
  }

  goToVocabulary() {
    this.router.navigate(['/vocabulary']);
    this.drawer.toggle();
  }
  goToSentences() {
    this.router.navigate(['/sentences']);
    this.drawer.toggle();
  }
  goToGrammar() {
    this.router.navigate(['/grammar']);
    this.drawer.toggle();
  }
  goToTyping() {
    this.router.navigate(['/typing']);
    this.drawer.toggle();
  }
}
