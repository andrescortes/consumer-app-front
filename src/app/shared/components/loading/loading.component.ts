import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  isLoading = false;
  constructor(private readonly spinnerService: SpinnerService) {
    this.isLoading = this.spinnerService.loading;
  }
}
