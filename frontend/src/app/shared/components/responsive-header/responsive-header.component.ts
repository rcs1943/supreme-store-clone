import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
	selector: 'app-responsive-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	templateUrl: './responsive-header.component.html',
})
export class ResponsiveHeaderComponent {
	navigationService = inject(NavigationService);

	goBack(): void {
		this.navigationService.goBack();
	}
}
