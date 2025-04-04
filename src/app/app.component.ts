import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ThemeService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'consumer-app-front';
  themes = ['md-dark-indigo', 'arya-blue', 'lara-light-blue'];
  currentThemeIndex = 0;

  constructor(
    private readonly themeService: ThemeService,
    private readonly _elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (this._elementRef.nativeElement.hasAttribute('ng-version')) {
      this._elementRef.nativeElement.removeAttribute('ng-version');
    }
  }

  changeTheme() {
    const theme = this.themes[this.currentThemeIndex];
    this.themeService.setTheme(theme);
    this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themes.length;
  }
}
