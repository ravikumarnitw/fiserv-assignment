import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentlistComponent } from './components/documentlist/documentlist.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocumentlistComponent,
    CategoryComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
