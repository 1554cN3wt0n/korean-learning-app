import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  createAndShuffleArray(n: number): number[] {
    const array = Array.from({ length: n }, (_, index) => index);

    // Shuffle the array
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }

    return array;
  }
}
