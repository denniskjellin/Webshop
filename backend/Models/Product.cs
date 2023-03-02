using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        [Required]
        public decimal Price { get; set; }
[Required]
[Display(Name = "Highlight")]
        public bool IsHighlighted { get; set; }

        
        [Display(Name = "Image URL")]
        public string? ImageName { get; set; }

        [NotMapped]
        [Display(Name = "Image")]
        public IFormFile? ImageFile { get; set; }

        [Required]
        [Display(Name = "Alt Text")]
        public string? ImageAlt { get; set; }

        // relations
        [Required]
        [ForeignKey("CategoryId")]
        public int? CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}