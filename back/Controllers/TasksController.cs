using back.Data;
using back.DTOs;
using back.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public TasksController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTask(CreateTaskDto dto)
        {
            var task = new TaskItem
            {
                Id = Guid.NewGuid(),
                Title = dto.Title,
                Description = dto.Description,
                Status = dto.Status,
                Order = 0,
                UserId = String.Empty,
                CreatedAt = DateTime.UtcNow
            };
            _appDbContext.Tasks.Add(task);
            await _appDbContext.SaveChangesAsync();

            var response = new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                Status = task.Status,
                Order = task.Order
            };
            
            return Ok(response);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskResponseDto>>> GetAllTasks()
        {

            var response = await _appDbContext.Tasks.OrderBy(task => task.Order).Select(task => new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                Status = task.Status,
                Order = task.Order
            }).ToListAsync();

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskResponseDto>> GetTask(Guid id)
        {
            var task = await _appDbContext.Tasks.FindAsync(id);

            if (task == null) return NotFound("Tarefa inexistente.");

            var response = new TaskResponseDto
            {
                Id = task.Id,
                Title = task.Title,
                Description = task.Description,
                Status = task.Status,
                Order = task.Order
            };

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(Guid id)
        {
            var task = await _appDbContext.Tasks.FindAsync(id);

            if (task == null) return NotFound("Tarefa inexistente.");

            _appDbContext.Tasks.Remove(task);
            await _appDbContext.SaveChangesAsync();

            return Ok("Tarefa apagada com êxito.");
        }

    }
}