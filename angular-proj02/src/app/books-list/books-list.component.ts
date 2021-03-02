import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  err: string;
  constructor(private bookService: BooksService) {
    this.books = null;
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (data) => { this.books = data; },
      (err) => { this.err = err.message; }
    );
  }

  deleteBook(id: number) {
    if (confirm("Are you sure to delete book#" + id + "?")) {
      this.bookService.delete(id).subscribe(
        () => {
          this.bookService.getAll().subscribe(
            (data) => { this.books = data; },
            (err) => { this.err = err.message; }
          );
        }
      );
    }
  }
}
