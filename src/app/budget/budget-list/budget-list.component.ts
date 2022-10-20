import { Component, OnInit } from '@angular/core';
import { BudgetService } from './../../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: 'budget-list.component.html',
})
export class BudgetListComponent implements OnInit {
  constructor(public BudgetService: BudgetService) {}

  ngOnInit(): void {}

  get budgetList() {
    return this.BudgetService.budgetList;
  }

  porAlfabeto() {
    this.BudgetService.budgetList.sort(function (a, b) {
      if (a.budgetTitle > b.budgetTitle) {
        return 1;
      }
      if (a.budgetTitle < b.budgetTitle) {
        return -1;
      }
      return 0;
    });
    this.imprimirLista();
  }

  porFecha() {
    this.BudgetService.budgetList.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
    this.imprimirLista();
  }

  porID() {
    this.BudgetService.budgetList.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    this.imprimirLista();
  }

  imprimirLista() {
    return this.budgetList;
  }
}