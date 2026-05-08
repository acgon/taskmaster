using back.Entities;
using Microsoft.EntityFrameworkCore;

namespace back.Data
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<TaskItem> Tasks => Set<TaskItem>();
    }
}