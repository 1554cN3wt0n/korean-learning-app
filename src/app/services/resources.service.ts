import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor() {}

  async getSentences(): Promise<any> {
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

      return parsedData;
    } catch (error) {
      console.error('Error fetching or parsing CSV: ', error);
    }
  }

  // Basic CSV parser function (no external library needed)
  parseCSV(csvText: string): Array<string[]> {
    // Split by new line to get rows
    const rows = csvText.split('\n');

    // Split each row by comma to get individual values (columns)
    const data = rows.map((row) => row.split('\t'));

    return data;
  }
}
