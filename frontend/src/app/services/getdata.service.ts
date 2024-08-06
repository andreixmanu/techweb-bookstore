import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private data: any;

  constructor() { }

  getData() : any {
    return this.data;
  }

  setData(data: any) : any {
    this.data = data;
  }
}
