import { createRequestHandler } from "@remix-run/architect";
import * as build from "@remix-run/dev/server-build";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== "production") {
  require("./mocks");
}

export const handler = createRequestHandler({
  build,
  // eslint-disable-next-line no-undef
  mode: process.env.NODE_ENV,
});
