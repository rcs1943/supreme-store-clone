import {
	ChangeDetectionStrategy,
	Component,
	inject,
	ChangeDetectorRef,
	OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';
import { Product } from 'src/app/models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ResponsiveHeaderComponent } from 'src/app/shared/components/responsive-header/responsive-header.component';

@Component({
	selector: 'app-singular-item',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		ControlsComponent,
		HttpClientModule,
		RouterLink,
		ResponsiveHeaderComponent,
	],
	templateUrl: './singular-item.component.html',
})
export class SingularItemComponent implements OnInit {
	http = inject(HttpClient);
	route = inject(ActivatedRoute);
	cd = inject(ChangeDetectorRef);
	products: Product[] = [];
	currentIndex: number = -1;
	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const dripPath = params.get('dripPath');
			const url = `assets/data/${dripPath}.drip.json`;
			this.http.get<Product[]>(url).subscribe((data) => {
				this.products = data;
				this.currentIndex =
					data.find((drip) => drip.dripPath === dripPath)?.id || 0;
				this.currentIndex--;
				this.cd.detectChanges();
			});
		});
	}
}
