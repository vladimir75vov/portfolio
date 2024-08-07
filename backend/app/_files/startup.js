import { spawn } from "node:child_process";

import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const ls = spawn("cmd", [
  "/C",
  `npx kill-port --port ${process.env.BACKEND_PORT || 4000} && supervisor app/app.js`,
]);

ls.stdout.on("data", (data) => {
  console.log(`${data}`);
});
