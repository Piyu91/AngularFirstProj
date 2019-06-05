import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HighlightDangerDirective } from './highlight-danger.directive';
import { StrFormatPipe } from './str-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthorizeComponent,
    HighlightDangerDirective,
    StrFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
