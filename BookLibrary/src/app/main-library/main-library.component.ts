import { Component, OnInit } from '@angular/core';
import { MainLibraryService } from '../services/main-library.service';
import { Popup } from 'ng2-opd-popup';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CostumValidatorsService } from '../services/costum-validators.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-library',
  animations:  [
    trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(300, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate(300, style({ opacity: 0 }))
        ])
    ])
],
  templateUrl: './main-library.component.html',
  styleUrls: ['./main-library.component.css']
})
export class MainLibraryComponent implements OnInit {

  constructor(private mainLibraryService: MainLibraryService, private popup: Popup, private costumValidators: CostumValidatorsService) { }
  booksCollection: Object[];
  createAddForm: FormGroup;
  bookId: number;
  currentBook: object;
  editMode: boolean = false;
  isTitleValid: boolean = false;
  promptDelete: boolean;

  ngOnInit() {
    this.mainLibraryService.getAllBooks().subscribe(books => {
      this.booksCollection = books;
    })
    this.initForm(null, null, null);
  }

  createOrEditBook(book, id) {
    this.cleanFormAndClosePopup();
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    if (book) {
      this.editMode = true
      this.currentBook = book;
      this.bookId = id;
      this.initForm(book.Title, book.Author, book.Date);
    }
    this.popup.show(this.initPopoupOptions(book));
  }

  initPopoupOptions(book) {
    return this.popup.options = {
      showButtons: false,
      header: book ? 'Edit A Book' : 'Create A New Book',
      animation: 'fadeInDown'
    }
  }

  initForm(title, author, date) {
    this.createAddForm = new FormGroup({
      'Title': new FormControl(title, Validators.required),
      'Author': new FormControl(author, Validators.required),
      'Date': new FormControl(date, Validators.compose([Validators.required, this.costumValidators.date]))
    })
  }

  onSubmit() {
    this.createAddForm.controls.Title.setValue(this.costumValidators.nonEnglish(this.createAddForm.controls.Title.value));
    if (this.bookId > -1) {
      this.booksCollection[this.bookId] = this.createAddForm.value;
    } else this.booksCollection.push(this.createAddForm.value);
    this.cleanFormAndClosePopup();
    this.editMode = false;
  }

  onCancel() {
    this.editMode = false;
    this.cleanFormAndClosePopup();
  }
  onDelete() {
    this.cleanFormAndClosePopup();
    this.booksCollection.splice(this.bookId, 1);
  }
  cleanFormAndClosePopup() {
    this.popup.hide();
    this.initForm(null, null, null);
    this.editMode = false;
    this.isTitleValid = false;
  }
  checkValidTitle(event) {
    this.isTitleValid = false;
    this.booksCollection.map(book => {
      if (book['Title'] == event.target.value) {
        this.isTitleValid = true;
      }
    })
  }
}
