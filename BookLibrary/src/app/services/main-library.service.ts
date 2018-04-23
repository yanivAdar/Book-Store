import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MainLibraryService {

  constructor(private http: Http) { }

  getAllBooks() {
    return this.http.get('booksCollection.json').map(books => books.json());
  }
}
