import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XPdfViewerComponent } from './common/x-pdf-viewer/x-pdf-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocListComponent } from './doc-list/doc-list.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { XExpendedPdfViewerComponent } from './common/x-expended-pdf-viewer/x-expended-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    XPdfViewerComponent,
    DocListComponent,
    XExpendedPdfViewerComponent
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
