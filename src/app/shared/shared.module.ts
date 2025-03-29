import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { LoadingComponent } from './components/loading/loading.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [LoadingComponent, NotificationComponent],
  imports: [CommonModule, UiModule],
  exports: [UiModule, LoadingComponent, NotificationComponent],
  providers: [],
})
export class SharedModule {}
