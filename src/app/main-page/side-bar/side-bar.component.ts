import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
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
  {
    path: 'hall-manage',
    title: 'hall Manage',
    icon: 'content_paste',
    class: '',
  },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
  menuItems = [
    {
      title: 'Dashboard',
      routerLink: 'dashboard',
      iconClass: 'pi pi-th-large',
      subItems: [],
    },

    {
      title: 'Manage Branches',
      routerLink: 'branch-manage',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Manage Hall',
      routerLink: 'hall-manage',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Orders Management',
      routerLink: 'order-manage',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Manage Menu',
      iconClass: 'pi pi-building',
      routerLink: null,
      subItems: [
        { title: 'Category', routerLink: 'catagories' },
        { title: 'Menu', routerLink: 'menu' },
        { title: 'Deals', routerLink: 'deals' },
      ],
      showDropdown: false,
    },
    {
      title: 'Manage Customer',
      routerLink: 'manage-customer',
      iconClass: 'pi pi-user',
      subItems: [],
    },
    {
      title: 'Vendors Management',
      routerLink: 'vandors',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Finance Management',
      routerLink: 'expense-manage',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'User Management',
      routerLink: 'user-management',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Reports',
      routerLink: 'salary-manage',
      iconClass: 'pi pi-building',
      subItems: [],
    },
    {
      title: 'Profile',
      routerLink: 'profile',
      iconClass: 'pi pi-user',
      subItems: [],
    },
  ];
  constructor(private router: Router) {}
  ngOnInit() {}

  isMobileMenu() {
    if ($(window).width() > 768) {
      return false;
    }
    return true;
  }
}
