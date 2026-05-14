import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-create.html',
  styleUrls: ['./book-create.css']
})
export class BookCreateComponent {
  book: Book = { id: 0, title: '', author: '', description: '' };

  constructor(private bookService: BookService, private router: Router) { }

  saveBook(): void {
    this.bookService.createBook(this.book).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err: any) => console.error('Gabim gjatë shtimit të librit:', err)
    });
  }
}