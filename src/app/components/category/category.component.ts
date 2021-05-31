import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public nSelectedIndex = 0;

  @Output() emitCategoryChange: EventEmitter<string> = new EventEmitter<string>();

  public categories = ['All', 'Financial', 'Technical', 'Marketing' , 'HumanResources'];
  constructor() { }

  ngOnInit(): void {
  }

  fnOnCategoryClick(category, index: number): void{
    this.nSelectedIndex = index;
    this.emitCategoryChange.emit(category);
  }

}