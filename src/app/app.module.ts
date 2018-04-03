import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CoreModule } from './core/core.module';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
