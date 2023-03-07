import express from "express";
import ProductManager from "./productManager.js";

const products = new ProductManager("./productos.json");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  try {
    res.send(
      `<h1 style="text-align: center">Bienvenido a mi nueva entrega! 😎</h1>`
    );
  } catch (error) {
    console.log(`Error cargando el proyecto: ${error.message}`);
  }
});

const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on("error", error => console.log(`Error en servidor: ${error.message}`));
