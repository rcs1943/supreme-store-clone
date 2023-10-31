import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subfooter',
  standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './subfooter.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubfooterComponent {

}
