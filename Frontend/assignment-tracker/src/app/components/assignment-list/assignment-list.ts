import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../services/assignment.service';
import { Assignment } from '../../models/assignment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-list.html',
  styleUrl: './assignment-list.css'
})
export class AssignmentListComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.assignments = this.assignmentService.getAssignments();
  }

  deleteAssignment(id: number) {
    this.assignmentService.deleteAssignment(id);
  }

  toggleCompletion(id: number) {
    this.assignmentService.toggleCompletion(id);
  }
}