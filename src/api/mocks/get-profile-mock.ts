import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "81373783478",
      role: "manager",
      createdAt: new Date(),
      updateAt: null,
    });
  },
);
