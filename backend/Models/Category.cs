using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        [Required]
        [Display(Name = "Category Name")]
        public string? Name { get; set; } = String.Empty;

        // Navigation property to Products
        public List<Product>? Products { get; set; }
    }
}