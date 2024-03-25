import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: 'branch-manage', title: 'Manage Branch', icon: 'person', class: '' },
  { path: 'hall-manage', title: 'hall Manage', icon: 'content_paste', class: '' },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuItems = [
    {
      title: 'Dashboard',
      routerLink: 'dashboard',
      iconClass: 'pi pi-th-large'
    },

    {
      title: 'Manage Branches',
      routerLink: 'branch-manage',
      iconClass: 'pi pi-building'
    },
    {
      title: 'Manage Hall',
      routerLink: 'hall-manage',
      iconClass: 'fas fa-university',
    },
    {
      title: 'Orders Management',
      routerLink: 'order-manage',
      iconClass: 'fas fa-university'
    },
    {
      title: 'Manage Menu',
      iconClass: 'fas fa-university',
      routerLink: null,
      subItems: [
        { title: 'Category', routerLink: 'category' },
        { title: 'Menu', routerLink: 'menu' },
        { title: 'Deals', routerLink: 'deals' }
      ]
    },
    {
      title: 'Manage Customer',
      routerLink: 'customers-manage',
      iconClass: 'pi pi-user'
    },
    {
      title: 'Vendors Management',
      routerLink: 'dashboard',
      iconClass: 'fas fa-university'
    },
    {
      title: 'Finance Management',
      routerLink: 'dashboard',
      iconClass: 'fas fa-university'
    },
    {
      title: 'User Management',
      routerLink: 'dashboard',
      iconClass: 'fas fa-university'
    },
    {
      title: 'Reports',
      routerLink: 'dashboard',
      iconClass: 'fas fa-university'
    },
    {
      title: 'profile',
      routerLink: 'dashboard',
      iconClass: 'pi pi-user'
    },
  ]

  constructor(private router: Router) { }
  isDropdownOpen = false;

  // Method to toggle the dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  ngOnInit() {
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
