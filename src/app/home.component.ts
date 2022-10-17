import { BudgetService } from './services/budget.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent {

  precioTotal: number;

  constructor(public BudgetService: BudgetService) {
    this.precioTotal = this.BudgetService.precioTotal;   
  }

  sumar(evento: any) {
    this.BudgetService.sumar(evento);
    this.precioTotal = this.BudgetService.precioTotal;   
    return this.precioTotal;
  }

  webOption: boolean = false;

  activationModal(event: any) {
    this.webOption = event.currentTarget.checked;
    return this.webOption;
  }
}