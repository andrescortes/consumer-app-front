import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { LoadingComponent } from './components/loading/loading.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoadingComponent,
    NotificationComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, UiModule],
  exports: [
    UiModule,
    LoadingComponent,
    NotificationComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  providers: [],
})
export class SharedModule {}
