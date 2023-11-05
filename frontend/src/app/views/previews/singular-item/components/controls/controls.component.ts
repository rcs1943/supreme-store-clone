import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
	selector: 'app-controls',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterLink],
	templateUrl: './controls.component.html',
})
export class ControlsComponent {
	@Input() currentIndex: number = 0;
	@Output() currentIndexChange = new EventEmitter<number>();
	@Input() listLength: number = 0;
	@Input() changeDripPath: () => void = () => {};

	cd = inject(ChangeDetectorRef);
	location = inject(Location);
	router = inject(Router);
	navigationService = inject(NavigationService);

	goBack(): void {
		this.navigationService.goBack();
	}

	goPreviousDrip = (): void => {
		// console.log(this.currentIndex)
		this.currentIndex--;
		this.currentIndexChange.emit(this.currentIndex)
		this.changeDripPath();
	}

	goNextDrip = (): void => {
		// console.log(this.currentIndex)
		this.currentIndex++;
		this.currentIndexChange.emit(this.currentIndex)
		this.changeDripPath();
	}
}
