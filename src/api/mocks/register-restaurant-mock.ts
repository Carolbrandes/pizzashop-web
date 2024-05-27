import { http, HttpResponse } from "msw";
import { RegisterRestaurantBody } from "../register-restaurant";

//* every time this request is called with body equal to null, it will return status 401
//* the first parameter in http.post is the type of params (in our case we don't use so we put never), the second is type of request body and the third is the type of response
export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  "/restaurants",
  async ({ request }) => {
    const { restaurantName } = await request.json();

    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, {
        status: 201,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
