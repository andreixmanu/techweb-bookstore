import { Component, Input } from '@angular/core';
import { BookObject } from '../book-object';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() bookObject!:BookObject;
}
