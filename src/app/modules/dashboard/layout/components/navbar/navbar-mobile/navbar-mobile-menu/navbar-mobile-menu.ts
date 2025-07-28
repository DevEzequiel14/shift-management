import { Component } from '@angular/core';
import { MenuService } from '../../../../../../../core/services/menu/menu-service';
import { SubMenuItem } from '../../../../../../../core/models/menu.model';
import { NavbarMobileSubmenu } from '../navbar-mobile-submenu/navbar-mobile-submenu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar-mobile-menu',
  imports: [
    NgClass,
    AngularSvgIconModule,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarMobileSubmenu,
  ],
  templateUrl: './navbar-mobile-menu.html',
  styleUrl: './navbar-mobile-menu.css'
})
export class NavbarMobileMenu {

  constructor(public menuService: MenuService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }
}
