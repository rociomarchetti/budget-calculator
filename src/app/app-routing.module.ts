import { HomeComponent } from './budget/home/home.component';
import { WelcomePageComponent } from './budget/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
