import { Component } from '@angular/core';
import { MenuService } from '../../../../../core/services/menu/menu-service';
import packageJson from '../../../../../../../package.json';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, NgClass, AngularSvgIconModule, SidebarMenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  public appJson: any = packageJson;

  constructor(public menuService: MenuService) { }
  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

}
