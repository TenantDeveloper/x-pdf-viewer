import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XExpendedPdfViewerComponent } from './x-expended-pdf-viewer.component';

describe('XExpendedPdfViewerComponent', () => {
  let component: XExpendedPdfViewerComponent;
  let fixture: ComponentFixture<XExpendedPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XExpendedPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XExpendedPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
