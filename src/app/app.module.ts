import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VenderDashboardComponent } from './vender-platform/vender-dashboard/vender-dashboard.component';
import { VenderServicesComponent } from './vender-platform/vender-services/vender-services.component';
import { OrderManagementComponent } from './vender-platform/order-management/order-management.component';
import { VenderFinanceManagementComponent } from './vender-platform/vender-finance-management/vender-finance-management.component';
import { VenderUserManagementComponent } from './vender-platform/vender-user-management/vender-user-management.component';
import { VenderReportsComponent } from './vender-platform/vender-reports/vender-reports.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {};

@NgModule({
  declarations: [AppComponent, VenderDashboardComponent, VenderServicesComponent, OrderManagementComponent, VenderFinanceManagementComponent, VenderUserManagementComponent, VenderReportsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderRouterModule,
    LazyLoadImageModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  isIndex(): boolean {
    return true; // or false based on your logic
  }
}
