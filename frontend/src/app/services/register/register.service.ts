import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:3000/user/new"

  constructor() { }

  async submitApplication(username: string, email: string, password: string, role: string) : Promise<number> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username, 
        email, 
        role,
        password
      })
    });

    return await response.status;
  }
}