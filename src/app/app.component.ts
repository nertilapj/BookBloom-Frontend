import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg glass-card m-3 shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" routerLink="/">
          <i class="fas fa-seedling me-2" style="color: #f4a7bb;"></i>
          <span style="color: #7b1fa2;">Book</span><span style="color: #f4a7bb;">Bloom</span>
        </a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}