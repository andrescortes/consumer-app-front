import { Component, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent implements OnDestroy {
  unsubscribe$ = new Subject<void>();
  isLoading = false;

  constructor(private readonly spinnerService: SpinnerService) {
    this.spinnerService.loading$
      .pipe(distinctUntilChanged(), takeUntil(this.unsubscribe$))
      .subscribe((loading) => {
        this.isLoading = loading;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
