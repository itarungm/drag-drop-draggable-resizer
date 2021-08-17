import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DsizerDirective } from './Directive/dsizer.directive';
@NgModule({
  declarations: [
    AppComponent,
    DsizerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
