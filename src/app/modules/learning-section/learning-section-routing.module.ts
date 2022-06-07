import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './views/content/content.component';
import { FinanceEducationMenuComponent } from './views/finance-education-menu/finance-education-menu.component';
import { MenuComponent } from './views/menu/menu.component';
import { PreventionHelpComponent } from './views/prevention-help/prevention-help.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'content',
    component: ContentComponent
  },
  {
    path: 'finance-education-menu',
    component: FinanceEducationMenuComponent
  },
  {
    path: 'prevention-help',
    component: PreventionHelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningSectionRoutingModule { }
