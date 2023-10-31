import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubfooterComponent } from './components/subfooter/subfooter.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
	selector: 'app-footer',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, SubfooterComponent, RouterLink],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	inPreview: boolean = false;
	inSpringSummer: boolean = false;
	route = inject(ActivatedRoute);

	ngOnInit() {
		this.route.url.subscribe((segments) => {
			if (segments[0].path === 'previews') {
				this.inPreview = true;
			}
			if (!segments[1]) return;
			if (segments[1].path === 'springsummer2023') {
				this.inSpringSummer = true;
			} else {
				this.inSpringSummer = false;
			}
		});
	}
}
