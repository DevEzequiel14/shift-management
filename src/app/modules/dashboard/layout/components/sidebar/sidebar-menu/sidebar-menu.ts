import { Component } from '@angular/core';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { MenuService } from '../../../../../../core/services/menu/menu-service';
import { SubMenuItem } from '../../../../../../core/models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenu,
    AngularSvgIconModule],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css'
})
export class SidebarMenu {

  constructor(public menuService: MenuService) { }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }


}
