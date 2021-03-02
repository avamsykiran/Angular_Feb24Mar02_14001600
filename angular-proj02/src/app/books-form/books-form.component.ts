import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  bookForm:FormGroup;
  id:FormControl;
  title:FormControl;
  price:FormControl;

  constructor(
    private bookService : BooksService,
    private router:Router
  ) { 

    this.id=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.title=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.price=new FormControl(0,[Validators.required,Validators.min(1)]);

    this.bookForm=new FormGroup({
      id:this.id,
      title:this.title,
      price:this.price
    });
  }

  ngOnInit(): void {
  }

  formSubmited(){
    this.bookService.add(this.bookForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl("/books");
      }
    );
  }
}
