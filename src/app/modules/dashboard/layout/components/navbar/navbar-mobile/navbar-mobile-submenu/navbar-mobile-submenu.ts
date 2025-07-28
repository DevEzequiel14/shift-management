import { Component, Input } from '@angular/core';
import { SubMenuItem } from '../../../../../../../core/models/menu.model';
import { MenuService } from '../../../../../../../core/services/menu/menu-service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgTemplateOutlet, NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar-mobile-submenu',
  imports: [NgClass, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule],
  templateUrl: './navbar-mobile-submenu.html',
  styleUrl: './navbar-mobile-submenu.css'
})
export class NavbarMobileSubmenu {

  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) { }

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

  public closeMobileMenu() {
    this.menuService.showMobileMenu = false;
  }

}
