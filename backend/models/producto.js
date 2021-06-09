const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true},
    marca: { type: String, required: true },
    tipo: { type: String, required: true},
    talla: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("producto", productoSchema);
