import { spawn } from "node:child_process";

import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const ls = spawn("cmd", [
  "/C",
  `npx kill-port --port ${process.env.FRONTEND_PORT || 3000} && next dev --hostname ${process.env.FRONTEND_IP || "127.0.0.1"} --port ${process.env.FRONTEND_PORT || 3000} `,
]);

ls.stdout.on("data", (data) => {
  // eslint-disable-next-line no-console
  console.log(`${data}`);
});
