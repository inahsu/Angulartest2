import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { TabComponent } from './component/tab/tab.component';
import { SectionComponent } from './component/section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TabComponent,
    SectionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
