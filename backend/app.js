const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
// app.use("/api/", require("./routes/usuario.routes"));
app.use("/api/productos", require("./routes/producto.routes"));

module.exports = app;