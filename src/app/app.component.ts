import { Component, OnDestroy } from '@angular/core';
import { DocumentService } from './services/document.service';
import IDocument from './models/document';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public arrDocumentList: Array<IDocument> = [];
  title = 'DocumentOrganizer';
  constructor(private oDocumentService: DocumentService) {
    this.arrDocumentList = this.oDocumentService.fnGetDocumentList();
  }

  ngOnDestroy(): void {
  }

  fnCategoryChangedHandler(category: string): void {
    if (category.toLocaleLowerCase() === 'all') {
      this.arrDocumentList = this.oDocumentService.fnGetDocumentList();
      return;
    }
    this.arrDocumentList = this.oDocumentService.fnGetDocumentList().filter((document) => {
      return document.category.toLowerCase().indexOf(category.toLowerCase()) > -1;
    });
  }


}
