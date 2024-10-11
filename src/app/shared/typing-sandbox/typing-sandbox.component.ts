import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-typing-sandbox',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './typing-sandbox.component.html',
  styleUrl: './typing-sandbox.component.scss',
})
export class TypingSandboxComponent {
  @Input()
  sentence!: string;

  @Input()
  meaning!: string;

  inputValue: string = '';

  @Output()
  result: EventEmitter<any> = new EventEmitter();

  showMessage: boolean = false;
  messageVisible: boolean = false;
  message: string = '';
  color: any = '';

  validate() {
    this.result.emit(this.inputValue == this.sentence);
    this.showMessage = true;
    this.messageVisible = true; // Set opacity to 100% (fade-in)
    if (this.inputValue == this.sentence) {
      this.message = 'You got it correct!';
      this.color = { color: 'green' };
    } else {
      this.color = { color: 'red' };
      this.message = 'Oh no!';
    }
    // After 3 seconds, trigger fade-out by changing opacity to 0
    setTimeout(() => {
      this.messageVisible = false;
    }, 1000);

    // After the transition completes (1 second), remove the message container
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
    this.inputValue = '';
  }

  hideMessage() {
    this.showMessage = false;
  }
}
