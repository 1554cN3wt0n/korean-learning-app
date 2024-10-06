import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  text: string = '한국어';
  letters: string[] = [];

  ngOnInit(): void {
    // Split the text into individual letters
    this.letters = this.text.split('');
  }

  // Function to calculate delay based on the index of the letter
  getDelay(index: number): string {
    return `${index * 0.1}s`; // 0.1 second delay between each letter
  }
}
