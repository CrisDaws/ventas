import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  seleccionarProducto: Producto;
  productos: Producto[];
  readonly URL_API = 'http://localhost:3000/api/productos';
  constructor(private http: HttpClient) {
    this.seleccionarProducto = new Producto();
  }
  postProducto(producto: Producto) {
    return this.http.post(this.URL_API, producto);
  }
  getProductos() {
    return this.http.get<Producto[]>(this.URL_API);
  }
  deleteProducto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
