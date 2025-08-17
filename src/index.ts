import express from "express";
import cors from "cors"; // 👈 importá cors
import router from "./routes/recetas.routes";

const app = express();

app.use(cors()); // 👈 permití solicitudes de otros orígenes
app.use(express.json());

app.use("/api/recetas", router); // 👈 importante

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
