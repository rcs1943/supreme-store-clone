import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
	inject,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductGrid } from 'src/app/models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-products-grid',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterLink, NgOptimizedImage, HttpClientModule],
	templateUrl: './products-grid.component.html',
})
export class ProductsGridComponent implements OnInit {
	http = inject(HttpClient);
	route = inject(ActivatedRoute);
	cd = inject(ChangeDetectorRef);

	products: ProductGrid[] = [];

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const category = params.get('category');
			const url = `assets/data/products.${category}.json`;

			this.http.get<ProductGrid[]>(url).subscribe((data) => {
				this.products = data;
				this.cd.markForCheck();
				// Debo ver la forma de que sea un Observable nms y punto.
			});
		});
	}
}
