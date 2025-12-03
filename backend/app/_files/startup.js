import { spawn } from "node:child_process";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

// Скрипт запуска backend сервера с автоматическим освобождением порта
const getCommand = () => {
  const port = process.env.BACKEND_PORT || 4000;
  return `npx kill-port --port ${port} && supervisor app/app.js`;
};

const ls = spawn("cmd", ["/C", getCommand()]);

ls.stdout.on("data", (data) => {
  console.log(data.toString());
});
