import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: 'learning-section',
    loadChildren: () => import('./modules/learning-section/learning-section.module').then( m => m.LearningSectionModule)
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
