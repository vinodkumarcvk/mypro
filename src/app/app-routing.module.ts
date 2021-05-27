import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { MaterialViewComponent } from './components/material-view/material-view.component';
import { PrimeGridComponent } from './components/prime-grid/prime-grid.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import { RegistrationComponent } from './components/registration/registration.component';



const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  {path:"prime", component:PrimeTableComponent},
  {path:"material", component:MaterialTableComponent},
  {path:'register',component:RegistrationComponent},
  {path:"pgrid",component:PrimeGridComponent},
  {path:"matview",component:MaterialViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
