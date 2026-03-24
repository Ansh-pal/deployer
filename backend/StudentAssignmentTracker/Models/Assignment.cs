using System;

namespace StudentAssignmentTracker.Models
{
    public class Assignment
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Subject { get; set; }

        public DateTime Deadline { get; set; }

        public bool IsCompleted { get; set; } = false;
    }
}