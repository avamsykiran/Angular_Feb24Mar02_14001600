import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksApiUrl:string = "http://localhost:9999/books";

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.booksApiUrl);
  }

  getById(id:number) : Observable<Book> {
    return this.httpClient.get<Book>(this.booksApiUrl + "/" + id);
  }

  add(book:Book) :Observable<Book>{
    return this.httpClient.post<Book>(this.booksApiUrl,book);
  }

  update(book:Book) :Observable<Book>{
    return this.httpClient.put<Book>(this.booksApiUrl+"/"+book.id,book);
  }

  delete(id:number) :Observable<void>{
    return this.httpClient.delete<void>(this.booksApiUrl+"/"+id);
  }
}
