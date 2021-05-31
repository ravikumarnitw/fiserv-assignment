import { Pipe, PipeTransform } from '@angular/core';
import IDocument from '../models/document';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(documents: Array<IDocument>, searchText: any): any {
    if (searchText == null) {
      return documents;
    }

    return documents.filter((document) => {
      return document.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
