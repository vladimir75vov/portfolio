import { exec } from "child-process-promise";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log(
  exec(
    `next dev --hostname ${process.env.FRONTEND_IP || "127.0.0.1"} --port ${process.env.FRONTEND_PORT || 3000}`,
  ),
);
console.log(
  `Frontend listens http://${process.env.FRONTEND_IP || "127.0.0.1"}:${process.env.FRONTEND_PORT || 3000}`,
);
