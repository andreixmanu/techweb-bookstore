import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}