import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-grid-preview',
	standalone: true,
	imports: [CommonModule, MainLayoutComponent, HttpClientModule],
	templateUrl: './grid-preview.component.html',
})
export class GridPreviewComponent {
	http = inject(HttpClient);
	products: Product[] = [];
	ngOnInit() {
		this.http
			.get<Product[]>('https://api.escuelajs.co/api/v1/products')
			.subscribe((data) => {
				this.products = data.slice(0, 36);
			});
	}
}
