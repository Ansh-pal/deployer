import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment';
import { AssignmentListComponent } from './components/assignment-list/assignment-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddAssignmentComponent, AssignmentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment-tracker');
}
