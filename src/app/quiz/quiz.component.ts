import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class QuizComponent implements OnInit {
  questions = [
    { question: 'How many countries are in Africa?', options: ['52', '53', '54', '55'], correctAnswer: 2 },
    { question: 'What is the capital of France?', options: ['London', 'Paris', 'Rome', 'Berlin'], correctAnswer: 1 },
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 2 },
    { question: 'Who wrote "To be, or not to be"?', options: ['Shakespeare', 'Dickens', 'Hemingway', 'Tolkien'], correctAnswer: 0 },
    { question: 'What is the chemical symbol for water?', options: ['O2', 'H2O', 'CO2', 'NaCl'], correctAnswer: 1 }
  ];
  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  answers: number[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Directly start with the first question
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
  }

  nextQuestion() {
    if (this.selectedAnswer !== null) {
      this.answers[this.currentQuestionIndex] = this.selectedAnswer;
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
      } else {
        this.router.navigate(['/result'], { state: { questions: this.questions, answers: this.answers } });
      }
    }
  }

  getProgressWidth(): string {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100 + '%';
  }
}













