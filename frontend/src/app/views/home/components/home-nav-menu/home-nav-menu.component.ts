import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-nav-menu',
  standalone: true,
	// changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './home-nav-menu.component.html',
})
export class HomeNavMenuComponent {

}
