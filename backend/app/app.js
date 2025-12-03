import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

// Backend сервер для раздачи статических файлов (видео, резюме, изображения)
const app = express();
const productRouter = express.Router();

dotenv.config({ path: "../.env" });

productRouter.get("/", (request, response) => {
  const users = [
    { id: 1, name: "John", email: "john@example.com" },
    {
      id: 2,
      name: "John2",
      email: "2@example.com",
      password: "123456",
    },
  ];
  return response.status(200).json({ users });
});

app.use(cors());
app.use(morgan("dev"));
app.use(process.env.BACKEND_API_PATH || "/api/v1/", productRouter);
productRouter.use("/resources/images", express.static("resources/images"));
productRouter.use("/resources/files", express.static("resources/files"));

app.listen(
  Number(process.env.BACKEND_PORT || 4000),
  String(process.env.BACKEND_IP || "127.0.0.1"),
  () => {
    console.log(
      `Backend listens http://${process.env.BACKEND_IP || "127.0.0.1"}:${process.env.BACKEND_PORT || 4000}${process.env.BACKEND_API_PATH}`,
    );
  },
);
