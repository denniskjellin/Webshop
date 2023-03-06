using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Category
    {
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Category Name is required.")]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Category Name must be between 2 and 50 characters long.")] // min max length
        [RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Category Name can only contain letters and spaces.")] // settings for allowing certain signs
        [Display(Name = "Category Name")]
        public string? Name { get; set; } = string.Empty;

        // Navigation property to Products
        public List<Product>? Products { get; set; }
    }
}
