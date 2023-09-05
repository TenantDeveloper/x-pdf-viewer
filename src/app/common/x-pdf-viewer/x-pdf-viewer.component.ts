import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-x-pdf-viewer',
  templateUrl: './x-pdf-viewer.component.html',
  styleUrls: ['./x-pdf-viewer.component.css']
})
export class XPdfViewerComponent {
  public documentUrl: string = '';
  public isValidUrl: boolean = false;

  @Input() set pdfUrl(val: string) {
    if(!val || val == '')  {
      this.isValidUrl = false;
      return;
    }
    this.documentUrl = val;
    this.isValidUrl = true;
  }

}
