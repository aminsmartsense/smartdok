import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { DropdownDirective } from './dropdown.directive';
import {TooltipModule} from "ng2-tooltip";
import { MainHomeComponent } from './main-home/main-home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    DropdownDirective,
    MainHomeComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
