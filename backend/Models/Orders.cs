using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
public class Orders
{
    [Display(Name = "Order ID")]
    public int Id { get; set; }
    [Display(Name = "Product ID")]
    public int ProductId { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
    [Display(Name = "Image URL")]
    public string ImageName { get; set; }
    [Display(Name = "Alt Text")]
    public string ImageAlt { get; set; }
    public int Quantity { get; set; }
}


}
