import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LOCALE_ID } from "@angular/core";
import localeES from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
registerLocaleData(localeES);

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
