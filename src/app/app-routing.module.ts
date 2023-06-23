import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ChildComponent } from './reactiveform/child/child.component';

const routes: Routes = [
  {
    path:"",
    component:ReactiveformComponent
  },
  {
    path:"child",
    component:ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
