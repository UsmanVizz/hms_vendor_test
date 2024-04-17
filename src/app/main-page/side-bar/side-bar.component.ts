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
      iconClass: 'grid_view ',
      subItems: [],
    },

    {
      title: 'Manage Branches',
      routerLink: 'branch-manage',
      iconClass: 'home_work',
      subItems: [],
    },
    {
      title: 'Manage Hall',
      routerLink: 'hall-manage',
      iconClass: 'domain',
      subItems: [],
    },
    {
      title: 'Orders Management',
      routerLink: 'order-manage',
      iconClass: 'contract',
      subItems: [],
    },
    {
      title: 'Manage Menu',
      iconClass: 'monetization_on',
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
      iconClass: 'person_pin',
      subItems: [],
    },
    {
      title: 'Vendors Management',
      routerLink: 'vandors',
      iconClass: 'clinical_notes',
      subItems: [],
    },
    {
      title: 'Finance Management',
      routerLink: 'expense-manage',
      iconClass: 'assured_workload',
      subItems: [],
    },
    {
      title: 'User Management',
      routerLink: 'user-management',
      iconClass: 'perm_contact_calendar',
      subItems: [],
    },
    {
      title: 'Reports',
      routerLink: 'salary-manage',
      iconClass: 'universal_currency',
      subItems: [],
    },
    {
      title: 'Profile',
      routerLink: 'profile',
      iconClass: 'person',
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
