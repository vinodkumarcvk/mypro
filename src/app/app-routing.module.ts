import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  {path:"prime", component:PrimeTableComponent},
  {path:"material", component:MaterialTableComponent},
  {path:'register',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
