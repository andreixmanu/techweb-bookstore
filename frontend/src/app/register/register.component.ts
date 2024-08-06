import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RegisterService } from '../services/register/register.service';
import { Router } from '@angular/router';


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
  router = inject(Router);

  constructor() {}

  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('user')
  });

   async submitApplication() {
    const resp = this.registerService.submitApplication(
      this.applyForm.value.username ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.password ?? '',
      this.applyForm.value.role ?? ''
    )

    if(await resp === 201) {
      console.log("Application submitted");
      this.router.navigate(['']);
    } else {
      console.log("Error submitting application");
    }
  }
}
