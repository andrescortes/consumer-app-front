import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  loading = false;

  constructor() {}

  show(): void {
    this.loading = true;
  }
  hide(): void {
    this.loading = false;
  }
}
