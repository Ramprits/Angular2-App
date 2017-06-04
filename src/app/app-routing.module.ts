import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { EventComponent } from 'app/event/event.component';

const routes: Routes = [
  { path: 'dashboard', component: WelcomeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'event', component: EventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
