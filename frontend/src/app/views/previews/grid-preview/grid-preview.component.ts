import { Component, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { ProductGrid } from 'src/app/models/product.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
	selector: 'app-grid-preview',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, MainLayoutComponent, HttpClientModule, RouterLink],
	templateUrl: './grid-preview.component.html',
})
export class GridPreviewComponent {
	http = inject(HttpClient);
	route = inject(ActivatedRoute);
	cd = inject(ChangeDetectorRef);
	products: ProductGrid[] = [];
	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const season = params.get('season');
			const url = `assets/data/preview${season}.json`;

			this.http.get<ProductGrid[]>(url).subscribe((data) => {
				this.products = data;
				this.cd.markForCheck();
				// Debo ver la forma de que sea un Observable nms y punto.
			});
		});
	}
}
