import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    CommonModule,
    InputTextModule,
    MultiSelectModule,
    PasswordModule,
    ProgressSpinnerModule,
    RippleModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    MultiSelectModule,
    PasswordModule,
    ProgressSpinnerModule,
    RippleModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class UiModule {}
