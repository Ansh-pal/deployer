import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private assignments: Assignment[] = [];

  constructor() {}

  // Get all assignments
  getAssignments(): Assignment[] {
    return this.assignments;
  }

  // Add new assignment
  addAssignment(assignment: Assignment) {
    assignment.id = Date.now(); // unique id
    assignment.isCompleted = false;
    this.assignments.push(assignment);
  }

  // Delete assignment
  deleteAssignment(id: number) {
    this.assignments = this.assignments.filter(a => a.id !== id);
  }

  // Toggle completion status
  toggleCompletion(id: number) {
    const assignment = this.assignments.find(a => a.id === id);
    if (assignment) {
      assignment.isCompleted = !assignment.isCompleted;
    }
  }
}