import { HttpResponse, http } from "msw";
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "./../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    status: "pending",
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "81373783478",
    },
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: "order-item-1",
        priceInCents: 1000,
        product: { name: "Pizza Pepperoni" },
        quantity: 1,
      },
      {
        id: "order-item-2",
        priceInCents: 2000,
        product: { name: "Pizza Marguerita" },
        quantity: 2,
      },
    ],
  });
});
