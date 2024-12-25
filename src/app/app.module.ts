import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentielPipe } from './exponentiel.pipe';
import { AuthorPipe } from './author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentielPipe,
    AuthorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
