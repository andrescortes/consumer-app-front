import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (
      this.registerForm.value.password !=
      this.registerForm.value.confirmPassword
    ) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Passwords do not match',
        key: 'br',
      });
      return;
    }
    if (
      this.registerForm.valid &&
      this.registerForm.value.password ===
        this.registerForm.value.confirmPassword
    ) {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Registration successful',
        key: 'br',
      });
      console.log('Signup Data:', this.registerForm.value);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid credentials',
        key: 'br',
      });
    }
  }
}
