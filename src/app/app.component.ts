import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'consumer-app-front';

  constructor(private readonly _elementRef: ElementRef) {
    this._elementRef.nativeElement.removeAttribute('ng-version');
  }
}
