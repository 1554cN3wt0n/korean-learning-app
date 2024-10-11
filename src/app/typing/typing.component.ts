import { Component } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { TypingSandboxComponent } from '../shared/typing-sandbox/typing-sandbox.component';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [TypingSandboxComponent],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss',
})
export class TypingComponent {
  loading: boolean = false;
  listWords!: any[];
  randomIdxs!: number[];
  idx!: number;
  sentence!: string;
  meaning!: string;

  constructor(
    private resourcesService: ResourcesService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.loadData().then(() => {
      this.setSentence();
    });
  }

  loadData() {
    this.loading = true;
    return this.resourcesService
      .getWords()
      .then((data: any[]) => {
        this.listWords = [...data];
        this.randomIdxs = this.utilsService.createAndShuffleArray(
          this.listWords.length
        );
        this.idx = this.randomIdxs.pop() || 0;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setSentence() {
    this.sentence = this.listWords[this.idx][2];
    this.meaning = this.listWords[this.idx][3];
    this.idx = this.randomIdxs.pop() || 0;
  }

  handleResult(event: any) {
    console.log(event);
    this.setSentence();
  }
}
