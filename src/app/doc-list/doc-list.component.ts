import { Component } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map, share, startWith, tap } from 'rxjs';
import { IDocument } from '../models/document.model';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent {

  private readonly _jsonURL: string = "assets/dummy.json";
  
  public readonly documents: Observable<IDocument[]> = this.http.get(this._jsonURL)
  .pipe(
    tap(x => {
      if(Array.isArray(x)) {
        this.currentPDF = x[0];
      }
    }),
    map(x => x as Array<IDocument>),
    startWith([]),
    share());

    public currentPDF: IDocument | null = null;
  constructor(private readonly http: HttpClient) {}



  public displayPDF(item: IDocument): void {
    this.currentPDF = null;
    setTimeout(() => {
    this.currentPDF = item;
    }, 100);
  }


}
