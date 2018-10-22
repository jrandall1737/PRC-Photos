import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    PhotoGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
