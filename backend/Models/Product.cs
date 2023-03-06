using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 2)]
        [RegularExpression(@"^[^!?\s]+$", ErrorMessage = "Title cannot contain ! or ?")] // settings for allowing certain signs
        public string? Title { get; set; }

        [Required]
        [StringLength(1000, MinimumLength = 5)] // set min/max length
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

        [NotMapped]
        public string ImageWebp { get; set; } = String.Empty;

        [Required]
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Alt Text must be between 2 and 100 characters long.")] // min max length
        [Display(Name = "Alt Text")]
        public string? ImageAlt { get; set; }

        // relations
        [Required]
        [ForeignKey("CategoryId")]
        public int? CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}
