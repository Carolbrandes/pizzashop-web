import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./sign-in-mocks";

export const worker = setupWorker(signInMock);

export async function enableMSW() {
  if (env.MODE !== "test") return;

  await worker.start(); //* from this moment the request will be intercepted by mock service worker
}
