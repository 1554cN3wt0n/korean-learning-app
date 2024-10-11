import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingSandboxComponent } from './typing-sandbox.component';

describe('TypingSandboxComponent', () => {
  let component: TypingSandboxComponent;
  let fixture: ComponentFixture<TypingSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypingSandboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypingSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
