using Microsoft.AspNetCore.Mvc;
using StudentAssignmentTracker.Data;
using StudentAssignmentTracker.Models;
using StudentAssignmentTracker.DTOs;
using Microsoft.EntityFrameworkCore;

namespace StudentAssignmentTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AssignmentsController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ GET all assignments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assignment>>> GetAssignments()
        {
            return await _context.Assignments.ToListAsync();
        }

        // ✅ GET by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Assignment>> GetAssignment(int id)
        {
            var assignment = await _context.Assignments.FindAsync(id);

            if (assignment == null)
                return NotFound();

            return assignment;
        }

        // ✅ POST create assignment
        [HttpPost]
        public async Task<ActionResult<Assignment>> CreateAssignment(AssignmentDto dto)
        {
            var assignment = new Assignment
            {
                Title = dto.Title,
                Subject = dto.Subject,
                Deadline = dto.Deadline
            };

            _context.Assignments.Add(assignment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAssignment), new { id = assignment.Id }, assignment);
        }

        // ✅ PUT update assignment
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAssignment(int id, Assignment updatedAssignment)
        {
            if (id != updatedAssignment.Id)
                return BadRequest();

            _context.Entry(updatedAssignment).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // ✅ DELETE assignment
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssignment(int id)
        {
            var assignment = await _context.Assignments.FindAsync(id);

            if (assignment == null)
                return NotFound();

            _context.Assignments.Remove(assignment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // ✅ Mark Complete
        [HttpPut("complete/{id}")]
        public async Task<IActionResult> MarkComplete(int id)
        {
            var assignment = await _context.Assignments.FindAsync(id);

            if (assignment == null)
                return NotFound();

            assignment.IsCompleted = true;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}