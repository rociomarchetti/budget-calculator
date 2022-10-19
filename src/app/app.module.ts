import { ModalComponent } from './budget/modal/modal.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './budget/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetService } from './services/budget.service';
import { PanelComponent } from './budget/panel/panel.component';
import { WelcomePageComponent } from './budget/welcome-page/welcome-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BudgetListComponent } from './budget/budget-list/budget-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PanelComponent, WelcomePageComponent, ModalComponent, BudgetListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule],
  providers: [BudgetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
