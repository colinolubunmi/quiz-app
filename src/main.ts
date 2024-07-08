import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { QuizComponent } from './app/quiz/quiz.component';
import { ResultComponent } from './app/result/result.component';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'result', component: ResultComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});




