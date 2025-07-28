import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../../core/models/menu.model';
import { MenuService } from '../../../../../../core/services/menu/menu-service';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar-submenu',
  imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule
],
  templateUrl: './sidebar-submenu.html',
  styleUrl: './sidebar-submenu.css'
})
export class SidebarSubmenu implements OnInit {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

}
