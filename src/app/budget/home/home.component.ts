import { BudgetService } from '../../services/budget.service';

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  precioTotal: number;

  formPresupuesto: FormGroup = this.fb.group({
    web: [false, Validators.required],
    seo: [false, Validators.required],
    ads: [false, Validators.required],
  });

  get total() {
    return this.BudgetService.total
  }

  constructor(public BudgetService: BudgetService, private fb: FormBuilder) {
    this.precioTotal = this.BudgetService.precioTotal;
  }

  check(evento: any) {
    this.BudgetService.sumar(evento);
    this.precioTotal = this.BudgetService.calcularTotal();
    return this.precioTotal;
  }

  webOption: boolean = false;

  activationModal(event: any) {
    this.webOption = event.currentTarget.checked;
    return this.webOption;
  }

  actualizarTotal() {
    this.precioTotal = this.BudgetService.calcularTotal();
    return this.precioTotal;
  }
}
