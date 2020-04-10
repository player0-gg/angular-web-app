import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetComponent } from './dataset/dataset.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: DatasetComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'detail/:id', component: DataDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
