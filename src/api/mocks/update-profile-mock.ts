import { http, HttpResponse } from "msw";
import { UpdateProfileBody } from "../update-profile";

//* every time this request is called with body equal to null, it will return status 401
//* the first parameter in http.post is the type of params (in our case we don't use so we put never), the second is type of request body and the third is the type of response
export const updateProfileMock = http.put<never, UpdateProfileBody>(
  "/profile",
  async ({ request }) => {
    const { name } = await request.json();

    if (name === "Rocket Pizza") {
      return new HttpResponse(null, {
        status: 204,
      });
    }

    return new HttpResponse(null, { status: 400 });
  },
);
