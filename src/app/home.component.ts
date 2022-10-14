import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

interface service {
  name: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  precioTotal: number = 0;
  acumulador: number = 0;

  services: service[] = [
    { name: 'web', price: 500 },
    { name: 'seo', price: 300 },
    { name: 'ads', price: 200 },
  ];

  sumar(evento: any): void {
    let optionChecked: boolean = evento.currentTarget.checked;

    for (let service in this.services) {
      if (
        optionChecked &&
        evento.target.defaultValue === this.services[service].name
      ) {
        this.acumulador = this.acumulador + this.services[service].price;
      } else if (
        optionChecked === false &&
        evento.target.defaultValue === this.services[service].name
      ) {
        this.acumulador = this.acumulador - this.services[service].price;
      }
    }
    this.precioTotal = this.acumulador;
  }
}