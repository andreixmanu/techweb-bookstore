import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  
  registerService = inject(RegisterService);

  constructor() {}

  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('user')
  });

  submitApplication() {
    this.registerService.submitApplication(
      this.applyForm.value.username ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
      this.applyForm.value.role ?? ''
    )
  }
}
