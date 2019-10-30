import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    ButtonComponent
  ],
  providers: [],
  entryComponents: [
    ButtonComponent
]
})
export class ButtonAppModule {
  constructor(private injector:Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('button-lib', el);
  }
}
