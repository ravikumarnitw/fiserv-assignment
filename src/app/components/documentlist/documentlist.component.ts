import { Component, OnInit, Input } from '@angular/core';
import IDocument from 'src/app/models/document';

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.scss']
})
export class DocumentlistComponent implements OnInit {


  @Input() arrDocumentlist: Array<IDocument> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
