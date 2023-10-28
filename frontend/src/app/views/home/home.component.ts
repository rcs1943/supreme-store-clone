import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeNavMenuComponent } from './components/home-nav-menu/home-nav-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HomeNavMenuComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
