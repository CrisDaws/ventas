import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    private router: Router,
    private productoService: ProductoService,
    public alertController: AlertController
  ) {}
  
  ngOnInit() {
    this.getProductos();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Comprado correctamente',
      subHeader: 'Gracias por su compra',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  getProductos() {
    this.productoService.getProductos().subscribe((res) => {
      this.productoService.productos = res;
    });
  }

  deleteProductos(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.productoService.deleteProducto(_id).subscribe((res) => {
        this.getProductos();
        this.resetForm(form);
      });
    }
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productoService.seleccionarProducto = new Producto();
    }
  }
}
