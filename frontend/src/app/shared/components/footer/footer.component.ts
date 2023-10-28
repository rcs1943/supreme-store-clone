import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubfooterComponent } from './components/subfooter/subfooter.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SubfooterComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() inPreview: boolean = false;
}
