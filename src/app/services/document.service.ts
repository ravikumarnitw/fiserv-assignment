import { Injectable } from '@angular/core';
import IDocument from '../models/document';
import { products } from '../data/documents';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private arrDocuments: Array<IDocument> = [];
  constructor() {
    this.arrDocuments = products;
  }

  fnGetDocumentList(): Array<IDocument> {
    return this.arrDocuments.slice();
  }
}
