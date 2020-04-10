import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetComponent } from './dataset/dataset.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: DatasetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
