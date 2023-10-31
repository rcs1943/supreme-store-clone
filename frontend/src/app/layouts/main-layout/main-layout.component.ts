import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}
