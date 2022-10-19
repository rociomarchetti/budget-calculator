import { Budget } from './../interfaces/budget.interface';
import { Injectable } from '@angular/core';
import { Service } from '../interfaces/service.interface';

@Injectable()
export class BudgetService {
  precioTotal: number = 0;
  acumulador: number = 0;
  webServiceResult: number = 0;

  numPaginas: number = 1;
  numIdiomas: number = 1;

  budgetList: Budget[] = [];

  services: Service[] = [
    { name: 'web', price: 500 },
    { name: 'seo', price: 300 },
    { name: 'ads', price: 200 },
  ];

  constructor() {}

  agregarPresupuesto(nuevo: Budget) {
    this.budgetList.push(nuevo)
    console.log(this.budgetList)
  }

  agregarWebService(numPaginas: number, numIdiomas: number) {
    this.webServiceResult = numPaginas * numIdiomas * 30;
    this.calcularTotal();
    return this.webServiceResult;
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
      } else if (
        optionChecked === false &&
        evento.target.defaultValue === 'web'
      ) {
        this.webServiceResult = 0;
      }
    }
    this.calcularTotal();
    return this.acumulador;
  }

  calcularTotal() {
    this.precioTotal = this.acumulador + this.webServiceResult;
    return this.precioTotal;
  }

  get total() {
    return this.precioTotal;
  }

  get list() {
    return this.budgetList
  }
}
