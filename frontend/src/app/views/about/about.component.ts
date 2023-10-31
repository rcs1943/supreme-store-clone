import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  footerInPreview: boolean = false;
}
