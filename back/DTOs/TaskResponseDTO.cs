namespace back.DTOs
{
    public class TaskResponseDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Status { get; set; } = "todo";
        public int Order { get; set; }
    }
}