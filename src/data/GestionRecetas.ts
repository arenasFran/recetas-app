import fs from "fs";
import { Receta } from "../models/receta";

const FILE_PATH = "./src/data/recetas.json";

export function leerRecetas(): Receta[] {
    if (!fs.existsSync(FILE_PATH)) return [];
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(data);
}

export function guardarRecetas(recetas: Receta[]): void {
    fs.writeFileSync(FILE_PATH, JSON.stringify(recetas, null, 2), "utf-8");
}
