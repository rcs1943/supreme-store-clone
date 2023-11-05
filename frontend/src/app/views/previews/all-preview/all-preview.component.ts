import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { CategoryNavigatorComponent } from './components/category-navigator/category-navigator.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';

@Component({
	selector: 'app-all',
	standalone: true,
	imports: [
		CommonModule,
		MainLayoutComponent,
		CategoryNavigatorComponent,
		ProductsGridComponent,
	],
	templateUrl: './all-preview.component.html',
})
export class AllPreviewComponent {}
