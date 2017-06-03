import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { CustomerComponent } from 'app/customer/customer.component';

const routes: Routes = [
  { path: 'dashboard', component: WelcomeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
