import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public isLoading = new Subject<boolean>();

  show() {
    this.isLoading.next(true);
  }

  hide() {
    setTimeout(() => {
      this.isLoading.next(false);
    }, 500);
  }


  constructor() { }
}
