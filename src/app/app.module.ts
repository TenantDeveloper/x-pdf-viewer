import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XPdfViewerComponent } from './common/x-pdf-viewer/x-pdf-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocListComponent } from './doc-list/doc-list.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    XPdfViewerComponent,
    DocListComponent
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
