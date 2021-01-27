import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ViewComponent } from './blogpage/view.component';
import {ModelService} from './model/model.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ViewComponent,
  ],
  imports: [
    JwPaginationModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
