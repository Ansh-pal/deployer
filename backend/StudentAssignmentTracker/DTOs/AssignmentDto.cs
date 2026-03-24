using System;

namespace StudentAssignmentTracker.DTOs
{
    public class AssignmentDto
    {
        public string Title { get; set; }

        public string Subject { get; set; }

        public DateTime Deadline { get; set; }
    }
}