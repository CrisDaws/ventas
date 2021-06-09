const Producto = require("../models/producto");
const productoCtrl = {};

productoCtrl.createProducto = async (req, res, next) => {
  const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    marca: req.body.marca,
    tipo: req.body.tipo,
    talla: req.body.talla
  });
  await producto.save();
  res.json({ status: "Producto Guardado" });
  console.log(producto);
};

productoCtrl.deleteProducto = async (req, res, next) => {
  await Producto.findByIdAndRemove(req.params.id);
  res.json({ status: "Producto Eliminado" });
};

productoCtrl.getProductos = async (req, res, next) => {
  const productos = await Producto.find();
  res.json(productos);
};

module.exports = productoCtrl;
