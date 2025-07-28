import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMobileMenu } from './navbar-mobile-menu/navbar-mobile-menu';
import { MenuService } from '../../../../../../core/services/menu/menu-service';

@Component({
  selector: 'app-navbar-mobile',
  imports: [NgClass, AngularSvgIconModule, NavbarMobileMenu],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.css'
})
export class NavbarMobile implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void { }
  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
