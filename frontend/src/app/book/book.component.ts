import { Component, Input } from '@angular/core';
import { BookObject } from '../book-object';
import { RouterModule } from '@angular/router';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() bookObject!:BookObject;

  constructor(private dataService: GetdataService) {}

  sendData() : any {
    this.dataService.setData(this.bookObject);
  }
}
