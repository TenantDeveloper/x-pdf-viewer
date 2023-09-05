import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPdfViewerComponent } from './x-pdf-viewer.component';

describe('XPdfViewerComponent', () => {
  let component: XPdfViewerComponent;
  let fixture: ComponentFixture<XPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
