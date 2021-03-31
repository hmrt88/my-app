import { AddpeopleComponent } from './addpeople/addpeople.component';
import { ListpeopleComponent } from './listpeople/listpeople.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'personas', component:ListpeopleComponent},
  { path:'addpersona', component:AddpeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
