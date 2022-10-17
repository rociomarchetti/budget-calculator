import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service.interface';

@Injectable()
export class BudgetService {
  precioTotal: number = 0;
  acumulador: number = 0;

  services: Service[] = [
    { name: 'web', price: 500 },
    { name: 'seo', price: 300 },
    { name: 'ads', price: 200 },
  ];

  constructor() {}

  webServiceResult: number = 0;

  agregarWebService(numPaginas:number, numIdiomas:number) {
    this.webServiceResult = (numPaginas * numIdiomas) * 30;
    this.services[0].price = this.webServiceResult + 500;
    return this.services[0].price;
  }

  sumar(evento: any): number {
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
    this.precioTotal = this.acumulador + this.webServiceResult;
    return this.precioTotal;
  }
}
