import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./../platform/dashboard/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'employee-manage',
        loadComponent: () =>
          import(
            './../platform/finance-management/employee-management/employee-management.component'
          ).then((m) => m.EmployeeManagementComponent),
      },
      {
        path: 'expense-manage',
        loadComponent: () =>
          import(
            './../platform/finance-management/expense-management/expense-management.component'
          ).then((m) => m.ExpenseManagementComponent),
      },
      {
        path: 'salary-manage',
        loadComponent: () =>
          import(
            './../platform/finance-management/salary-management/salary-management.component'
          ).then((m) => m.SalaryManagementComponent),
      },
      {
        path: 'branch-manage',
        loadComponent: () =>
          import(
            './../platform/manage-branch/manage-branch/manage-branch.component'
          ).then((m) => m.ManageBranchComponent),
      },
      {
        path: 'manage-customer',
        loadComponent: () =>
          import(
            '../platform/manage-customer/manage-customers/manage-customers.component'
          ).then((m) => m.ManageCustomersComponent),
      },
      {
        path: 'hall-manage',
        loadComponent: () =>
          import(
            './../platform/manage-hall/manage-hall/manage-hall.component'
          ).then((m) => m.ManageHallComponent),
      },
      {
        path: 'catagories',
        loadComponent: () =>
          import(
            './../platform/manage-menu/catagories/catagories.component'
          ).then((m) => m.CatagoriesComponent),
      },
      {
        path: 'add-hall',
        loadComponent: () =>
          import('./../platform/manage-hall/add-hall/add-hall.component').then(
            (m) => m.AddHallComponent
          ),
      },
      {
        path: 'branch-detail/:id',
        loadComponent: () =>
          import('./../platform/manage-branch/branch-detail/branch-detail.component').then(
            (m) => m.BranchDetailComponent
          ),
      },
      {
        path: 'add-category',
        loadComponent: () =>
          import('./../platform/manage-menu/add-category/add-category.component').then(
            (m) => m.AddCategoryComponent
          ),
      },
      {
        path: 'add-deal',
        loadComponent: () =>
          import('./../platform/manage-menu/add-deal/add-deal.component').then(
            (m) => m.AddDealComponent
          ),
      },
      {
        path: 'add-menu',
        loadComponent: () =>
          import('./../platform/manage-menu/add-menu/add-menu.component').then(
            (m) => m.AddMenuComponent
          ),
      },
      {
        path: 'hall-detail/:id',
        loadComponent: () =>
          import('./../platform/manage-hall/hall-detail/hall-detail.component').then(
            (m) => m.HallDetailComponent
          ),
      },
      {
        path: 'deals',
        loadComponent: () =>
          import('./../platform/manage-menu/deals/deals.component').then(
            (m) => m.DealsComponent
          ),
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./../platform/manage-menu/menu/menu.component').then(
            (m) => m.MenuComponent
          ),
      },
      {
        path: 'hall-bookings',
        loadComponent: () =>
          import(
            './../platform/order-managment/bookings/bookings.component'
          ).then((m) => m.BookingsComponent),
      },
      {
        path: 'hall-cancelled',
        loadComponent: () =>
          import(
            './../platform/order-managment/cancelled/cancelled.component'
          ).then((m) => m.CancelledComponent),
      },
      {
        path: 'hall-inprogress',
        loadComponent: () =>
          import(
            './../platform/order-managment/in-progress/in-progress.component'
          ).then((m) => m.InProgressComponent),
      },
      {
        path: 'reservation',
        loadComponent: () =>
          import(
            './../platform/order-managment/reservation/reservation.component'
          ).then((m) => m.ReservationComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./../platform/profile/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./../platform/reports/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
      {
        path: 'user-management',
        loadComponent: () =>
          import(
            './../platform/user-management/user-management/user-management.component'
          ).then((m) => m.UserManagementComponent),
      },
      {
        path: 'vandors',
        loadComponent: () =>
          import(
            './../platform/vandors-management/vandors-management/vandors-management.component'
          ).then((m) => m.VandorsManagementComponent),
      },
      {
        path: 'add-branch',
        loadComponent: () =>
          import(
            '../platform/manage-branch/add-branch/add-branch.component'
          ).then((m) => m.AddBranchComponent),
      },
    ],
  },
  // { path: 'addhall', loadComponent: () => import('./../platform/manage-hall/add-hall/add-hall.component').then(m => m.AddHallComponent), pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
