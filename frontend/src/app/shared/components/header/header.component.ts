import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
	currentDate: string = '';
	currentTime: string = '';

	constructor(private cd: ChangeDetectorRef) {}
	ngOnInit(): void {
		this.updateDate();
		setInterval(() => {
			this.updateDate();
			this.cd.markForCheck();
		}, 60000);
	}

	updateDate(): void {
		const date = new Date();
		this.currentDate = date.toLocaleString("en-US", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		});
		const hours = date.toLocaleString("en-US", {
			timeZone: 'America/New_York',
			hour: "2-digit",
			minute: "numeric",
			hour12: true,
		});
		this.currentTime = hours.replace(/\s/g, '');
	}
}
