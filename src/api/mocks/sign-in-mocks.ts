import { http, HttpResponse } from "msw";
import { SignInBody } from "../sign-in";

//* every time this request is called with body equal to null, it will return status 401
//* the first parameter in http.post is the type of params (in our case we don't use so we put never) and the second is type of request body.
export const signInMock = http.post<never, SignInBody>(
  "/authenticate",
  async ({ request }) => {
    const { email } = await request.json();

    if (email === "johndoe@example.com") {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          "Set-Cookie": "auth=sample-jwt",
        },
      });
    }

    return new HttpResponse(null, { status: 401 });
  },
);
