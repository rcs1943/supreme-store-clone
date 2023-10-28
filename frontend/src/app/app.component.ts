import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GridPreviewComponent } from './views/previews/grid-preview/grid-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, GridPreviewComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'suprememe';
}
