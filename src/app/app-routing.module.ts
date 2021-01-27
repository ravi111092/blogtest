import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ViewComponent} from '../app/blogpage/view.component';

const routes: Routes = [{
                          path: '', 
                          component:MenuComponent,
                        },{ 
                          path: 'view', 
                          component:ViewComponent,
                        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
