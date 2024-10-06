import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarQuizComponent } from './grammar-quiz.component';

describe('GrammarQuizComponent', () => {
  let component: GrammarQuizComponent;
  let fixture: ComponentFixture<GrammarQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrammarQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
