import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './budget/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetService } from './services/budget.service';
import { PanelComponent } from './budget/panel/panel.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PanelComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [BudgetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
