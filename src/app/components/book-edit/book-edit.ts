import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-edit.html',
  styleUrls: ['./book-edit.css']
})
export class BookEditComponent implements OnInit {
  book!: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe({
      next: (data: Book) => this.book = data,
      error: (err: any) => console.error('Gabim gjatë marrjes së të dhënave të librit:', err)
    });
  }

  updateBook(): void {
    if (this.book) {
      this.bookService.updateBook(this.book.id, this.book).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err: any) => console.error('Gabim gjatë përditësimit të librit:', err)
      });
    }
  }
}