using API.DTOs;
using Core.Entities.OrderAggregate;

namespace API.Extensions
{
    public static class OrderMappingExtensions
    {
        public static OrderDto toDto(this Order order)
        {
            return new OrderDto
            {
                Id = order.Id,
                BuyerEmail = order.BuyerEmail,
                OrderDate = order.OrderDate,
                ShippingAddress = order.ShippingAddress,
                PaymentSummary = order.PaymentSummary,
                DeliveryMethod = order.DeliveryMethod.Description,
                ShippingPrice = order.DeliveryMethod.Price,
                OrderItems = order.OrderItems.Select(x => x.toDto()).ToList(),
                Subtotal = order.Subtotal,
                Total = order.GetTotal(),
                Status = order.Status.ToString(),
                PaymentIntentId = order.PaymentIntentId,

            };
        }
        public static OrderItemDto toDto(this OrderItem orderItem)
        {
            return new OrderItemDto
            {
                ProductId = orderItem.ItemOrderd.ProductId,
                ProductName = orderItem.ItemOrderd.ProductName,
                PictureUrl = orderItem.ItemOrderd.PictureUrl,
                Price = orderItem.Price,
                Quantity = orderItem.Quantity,
            };
        }
    }
}
