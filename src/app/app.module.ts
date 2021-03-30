import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpeopleComponent } from './listpeople/listpeople.component';
import { HttpClientModule } from '@angular/common/http';
import { NvartabsComponent } from './nvartabs/nvartabs.component';
//import { HttpClient } from '@ngular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListpeopleComponent,
    NvartabsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
