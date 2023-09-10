import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-x-expended-pdf-viewer',
  templateUrl: './x-expended-pdf-viewer.component.html',
  styleUrls: ['./x-expended-pdf-viewer.component.css']
})
export class XExpendedPdfViewerComponent {
  isBase64: boolean = false;
  src: string | null = null;
  lang: string = 'en';
  @Output() printed: EventEmitter<void> = new EventEmitter<void>();
  @Output() prePrint: EventEmitter<void> = new EventEmitter<void>();
  @Input() set isArabic (val: boolean) {
    if(val) {
      this.lang = 'ar';
    }
  }
  @Input() fileName: string = 'doc.pdf';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() set pdfSrc(val: string) {

    if(this.isBase64Input(val)) {
      this.isBase64 = true;
    }else 
    {
      this.isBase64 = false;
    }

    this.src = val;
  } 


  public isBase64Input(str: string): boolean{
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
  }


  public afterPrintEmitter(): void {
    this.printed.emit();
  }

  public beforePrintEmitter(): void {
    this.prePrint.emit();
  }
}
