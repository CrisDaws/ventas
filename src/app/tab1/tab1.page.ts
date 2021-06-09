import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private router: Router,
    private productoService: ProductoService
  ) {}
  addProducto(form?: NgForm) {
    this.productoService.postProducto(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productoService.seleccionarProducto = new Producto();
    }
  }
}
