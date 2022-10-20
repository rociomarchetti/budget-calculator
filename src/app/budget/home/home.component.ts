
import { Budget } from './../../interfaces/budget.interface';
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
    web: [0, Validators.required],
    seo: [0, Validators.required],
    ads: [0, Validators.required],
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    titulo: ['', [Validators.required, Validators.minLength(3)]],
  });

  get total() {
    return this.BudgetService.total;
  }

  get budgetList() {
    return this.BudgetService.budgetList;
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

  campoEsValido(campo: string) {
    return (
      this.formPresupuesto.controls[campo].errors &&
      this.formPresupuesto.controls[campo].touched
    );
  }

  incluirfecha() {
    let date = new Date();
    let day = date.getDate().toString()
    let month = date.getMonth().toString()
    let year = date.getFullYear().toString()
    let newDate = `${day}/${month}/${year}`
    return newDate
  }
  

  saveBudget() {
    let newBudget: Budget = {
      id: this.budgetList.length + 1,
      userName: this.formPresupuesto.value.usuario,
      budgetTitle: this.formPresupuesto.value.titulo,
      totalPrice: this.precioTotal,
      date: this.incluirfecha()
    }

    if (this.formPresupuesto.valid && this.precioTotal > 0) {
      this.BudgetService.agregarPresupuesto(newBudget)    
    } else {
      this.formPresupuesto.markAllAsTouched()
    }

  }
}
