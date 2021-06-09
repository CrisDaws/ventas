export class Producto {
    constructor(_id = "", nombre = "", precio = 0, marca = "", tipo = "", talla = "") {
      this._id = _id;
      this.nombre = nombre;
      this.precio = precio;
      this.marca = marca;
      this.tipo = tipo;
      this.talla = talla;
    }
  
    _id: string;
    nombre: string;
    precio: number;
    marca: string;
    tipo: string;
    talla: string
  }