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
        [StringLength(100, MinimumLength = 2, ErrorMessage = "Product title must be between 2 and 100 characters long.")]
        public string? Title { get; set; }

        [Required]
        [StringLength(1000, MinimumLength = 5, ErrorMessage = "Product description must be between 2 and 1000 characters long.")] // set min/max length
        public string? Description { get; set; }

        [Required(ErrorMessage = "Product price is required.")]

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
