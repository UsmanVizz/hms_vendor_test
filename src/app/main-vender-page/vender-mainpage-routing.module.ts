import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenderMainPageComponent } from './vender-main-page/vender-main-page.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: VenderMainPageComponent,
    // canActivate:[AuthGuardService]
    children: [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadComponent: () =>
        import('./../vender-platform/vender-dashboard/vender-dashboard.component').then(
          (m) => m.VenderDashboardComponent
        ),
    },
    {
      path: 'order-management',
      loadComponent: () =>
        import('./../vender-platform/order-management/order-management.component').then(
          (m) => m.OrderManagementComponent
        ),
    },
    { 
      path: 'vender_services',
      loadComponent: () =>
        import('./../vender-platform/vender-services/vender-services.component').then(
          (m) => m.VenderServicesComponent
        ),
    },
    { 
      path: 'vender_user-management',
      loadComponent: () =>
        import('./../vender-platform/order-management/order-management.component').then(
          (m) => m.OrderManagementComponent
        ),
    },
    { 
      path: 'vender_reports',
      loadComponent: () =>
        import('./../vender-platform/vender-reports/vender-reports.component').then(
          (m) => m.VenderReportsComponent
        ),
    },

    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
