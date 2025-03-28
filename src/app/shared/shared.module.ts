import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { SpinnerService } from './services/spinner.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, UiModule],
  exports: [UiModule, LoadingComponent],
  providers: [SpinnerService],
})
export class SharedModule {}
