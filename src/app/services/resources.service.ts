import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  words: any[] = [];
  grammars: any[] = [];
  sentences: any[] = [];
  analyzedSentences: any = {};

  constructor() {}

  async getSentences(): Promise<any> {
    if (this.sentences.length > 0) {
      return this.sentences;
    }

    try {
      const response = await fetch('/assets/sentences.tsv');

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Get the CSV as text
      const csvText = await response.text();

      // Parse the CSV
      const parsedData = this.parseCSV(csvText);

      this.sentences = parsedData;
      return parsedData;
    } catch (error) {
      console.error('Error fetching or parsing CSV: ', error);
    }
  }

  async getWords(level: string = 'beginner'): Promise<any> {
    if (this.words.length > 0) {
      return this.words;
    }
    try {
      const response = await fetch(`/assets/words-${level}.csv`);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Get the CSV as text
      const csvText = await response.text();

      // Parse the CSV
      const parsedData = this.parseCSV(csvText, ',');

      this.words = parsedData;

      return parsedData;
    } catch (error) {
      console.error('Error fetching or parsing CSV: ', error);
    }
  }

  async getGrammar(level: string = 'beginner'): Promise<any> {
    if (this.grammars.length > 0) {
      return this.grammars;
    }

    try {
      const response = await fetch(`/assets/grammar-${level}.csv`);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Get the CSV as text
      const csvText = await response.text();

      // Parse the CSV
      const parsedData = this.parseCSV(csvText, ',');

      this.grammars = parsedData;

      return parsedData;
    } catch (error) {
      console.error('Error fetching or parsing CSV: ', error);
    }
  }

  async getAnalyzedSentences(batch: string = '0-999'): Promise<any> {
    if (batch in this.analyzedSentences) {
      return this.analyzedSentences[batch];
    }

    try {
      const response = await fetch(`/assets/sentences/sentences-${batch}.json`);

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.analyzedSentences[batch] = response.json();

      return this.analyzedSentences[batch];
    } catch (error) {
      console.error('Error fetching ', error);
    }
  }

  // Basic CSV parser function (no external library needed)
  parseCSV(csvText: string, delimeter: string = '\t'): Array<string[]> {
    // Split by new line to get rows
    const rows = csvText.split('\n');

    // Split each row by comma to get individual values (columns)
    const data = rows.map((row) => row.split(delimeter));

    return data;
  }
}
