import { spawn } from "node:child_process";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const getCommand = () => {
  const port = process.env.FRONTEND_PORT || 3000;
  const ip = process.env.FRONTEND_IP || "127.0.0.1";
  return `npx kill-port --port ${port} && next dev --hostname ${ip} --port ${port}`;
};

const ls = spawn("cmd", ["/C", getCommand()]);

ls.stdout.on("data", (data) => {
  console.log(data.toString());
});
