import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/photo-grid', pathMatch: 'full' },
  { path: 'photo-grid', component: PhotoGridComponent },
  { path: 'about', component: AboutComponent, },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
