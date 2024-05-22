import { env } from "@/env";
import { setupWorker } from "msw/browser";

export const worker = setupWorker();

export async function enableMSW() {
  if (env.MODE !== "test") return;

  await worker.start(); //* from this moment the request will be intercepted by mock service worker
}
