import { Component } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css'
})
export class AddAssignmentComponent {

  title: string = '';
  subject: string = '';
  deadline: string = '';

  constructor(private assignmentService: AssignmentService) {}

  addAssignment() {
    if (!this.title || !this.subject || !this.deadline) {
      alert("Please fill all fields");
      return;
    }

    this.assignmentService.addAssignment({
      id: 0,
      title: this.title,
      subject: this.subject,
      deadline: new Date(this.deadline),
      isCompleted: false
    });

    // Reset form
    this.title = '';
    this.subject = '';
    this.deadline = '';
  }
}