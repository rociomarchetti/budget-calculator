
import { Component, OnInit } from '@angular/core';
import { BudgetService } from './../../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: 'budget-list.component.html',
})
export class BudgetListComponent implements OnInit {

  constructor(public BudgetService: BudgetService) { }

  ngOnInit(): void {
  }

get budgetList() {
  return this.BudgetService.budgetList
}

}
