import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasetComponent } from './dataset/dataset.component';
import { DataDetailComponent } from './data-detail/data-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'overview', component: DatasetComponent, canActivate: [AuthGuard] },
  { path: 'upload', component: FileUploadComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DataDetailComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
