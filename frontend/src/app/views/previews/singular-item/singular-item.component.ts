import {
	ChangeDetectionStrategy,
	Component,
	inject,
	ChangeDetectorRef,
	OnInit,
} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';
import { Product } from 'src/app/models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
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
	activatedRoute = inject(ActivatedRoute);
	cd = inject(ChangeDetectorRef);
	router = inject(Router);
	location = inject(Location);
	products: Product[] = [];
	currentIndex: number = -1;
	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((params) => {
			const dripPath = params.get('dripPath');
			this.http.get<Product[]>('assets/data/test.drip.json').subscribe((data) => {
				this.products = data;
				this.currentIndex =
					data.find((drip) => drip.dripPath === dripPath)?.id || 0;
				this.currentIndex--;
				this.cd.detectChanges();
			});
		});
	}
	test = () => { 
		console.log(this.currentIndex);
	}
	changeDripPath = () => {
		const pathSegments = this.location.path().split('/');
		pathSegments[pathSegments.length - 1] =
			this.products[this.currentIndex].dripPath;
		const newPath = pathSegments.join('/');
		this.location.go(newPath);
	};
}
