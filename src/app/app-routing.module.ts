import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogpersonalComponent } from './components/dialogpersonal/dialogpersonal.component';
import { EditComponent } from './components/edit/edit.component';
import { PersonalComponent } from './components/personal/personal.component';

const routes: Routes = [
  {path:'',redirectTo:'personal',pathMatch:"full"},
  {path:'personal',component:PersonalComponent,pathMatch:"full"},
  {path:'personal/form/:id',component:DialogpersonalComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
