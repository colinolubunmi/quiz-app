import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultComponent {
  questions: any[] = [];
  answers: number[] = [];
  correctCount = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { questions: any[], answers: number[] };
    this.questions = state?.questions || [];
    this.answers = state?.answers || [];
    this.correctCount = this.answers.filter((answer, index) => answer === this.questions[index].correctAnswer).length;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}











