import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookComponent } from '../book/book.component';
import { BookObject } from '../book-object';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ 
    HeaderComponent, 
    BookComponent, 
    CommonModule,
    RouterModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'frontend';
  bookObjectList: BookObject[] = [
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "price_sold": null,
      "reserved_price": 15.99,
      "current_price": 12.50,
      "owner": "66912e2577643821bf58ed30"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "price_sold": 14.99,
      "reserved_price": 18.99,
      "current_price": 16.50,
      "owner": "66912e2577643821bf58ed31"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "price_sold": null,
      "reserved_price": 12.99,
      "current_price": 10.75,
      "owner": "66912e2577643821bf58ed32"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "price_sold": 13.50,
      "reserved_price": 14.99,
      "current_price": 13.99,
      "owner": "66912e2577643821bf58ed33"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville",
      "price_sold": null,
      "reserved_price": 16.99,
      "current_price": 14.50,
      "owner": "66912e2577643821bf58ed34"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "price_sold": null,
      "reserved_price": 13.99,
      "current_price": 11.99,
      "owner": "66912e2577643821bf58ed35"
    },
    {
      "title": "Jane Eyre",
      "author": "Charlotte Bronte",
      "price_sold": 12.99,
      "reserved_price": 14.99,
      "current_price": 13.50,
      "owner": "66912e2577643821bf58ed36"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "price_sold": null,
      "reserved_price": 19.99,
      "current_price": 17.50,
      "owner": "66912e2577643821bf58ed37"
    },
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "price_sold": 11.99,
      "reserved_price": 13.99,
      "current_price": 12.99,
      "owner": "66912e2577643821bf58ed38"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price_sold": null,
      "reserved_price": 15.99,
      "current_price": 13.99,
      "owner": "66912e2577643821bf58ed39"
    },
    {
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "price_sold": null,
      "reserved_price": 14.99,
      "current_price": 12.99,
      "owner": "66912e2577643821bf58ed3a"
    },
    {
      "title": "The Odyssey",
      "author": "Homer",
      "price_sold": 10.99,
      "reserved_price": 12.99,
      "current_price": 11.99,
      "owner": "66912e2577643821bf58ed3b"
    },
    {
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "price_sold": null,
      "reserved_price": 16.99,
      "current_price": 14.99,
      "owner": "66912e2577643821bf58ed3c"
    },
    {
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "price_sold": 13.99,
      "reserved_price": 15.99,
      "current_price": 14.99,
      "owner": "66912e2577643821bf58ed3d"
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "price_sold": null,
      "reserved_price": 17.99,
      "current_price": 15.99,
      "owner": "66912e2577643821bf58ed3e"
    }
  ];
}
