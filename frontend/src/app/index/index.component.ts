import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BookComponent } from '../book/book.component';
import { BookObject } from '../book-object';
import { CommonModule } from '@angular/common';
import { HomelistingService } from '../services/homelisting/homelisting.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ 
    HeaderComponent, 
    BookComponent, 
    CommonModule,
    RouterModule,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'frontend';
  homeListing: BookObject[];
  homeService: HomelistingService = inject(
    HomelistingService
  );

  constructor() {
    this.homeListing = this.homeService.getallBooks();
  }
}
