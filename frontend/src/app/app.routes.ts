import { Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { GridPreviewComponent } from './views/previews/grid-preview/grid-preview.component';
// import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SingularItemComponent } from './views/previews/singular-item/singular-item.component';
import { AllPreviewComponent } from './views/previews/all-preview/all-preview.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	// {
	// 	path: '',
	// 	component: MainLayoutComponent,
	// 	children: [
	// 		{ path: 'about', component: AboutComponent},
	// 		{ path: 'previews/:season', component: GridPreviewComponent},
	// 	]
	// }
	// Descubrir si es mejor anidar las rutas o tenerlas así plano nms.
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'previews/:season',
		component: GridPreviewComponent,
	},
	{
		path: 'previews/:season/:category/:dripPath',
		component: SingularItemComponent,
	},
	{
		path: 'previews/:season/:category',
		component: AllPreviewComponent
	}
];
