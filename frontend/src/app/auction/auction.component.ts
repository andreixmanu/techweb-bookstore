import { Component } from '@angular/core';
import { BookObject } from '../book-object';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent {
  title = 'auction';
  bookObject: BookObject | undefined;

  constructor(private dataService: GetdataService) {}

  ngOnInit() {
    this.bookObject = this.dataService.getData();
  }
}
