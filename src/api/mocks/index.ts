import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mocks";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") return;

  await worker.start(); //* from this moment the request will be intercepted by mock service worker
}
