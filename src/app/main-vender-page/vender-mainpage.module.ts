import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './vender-mainpage-routing.module';

import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainPageRoutingModule,
    CdkMenuModule
    // NgProgressModule.withConfig({
    //     spinner:false,
    //     color: "#426bf7",
    //     thick: true,
    // }),
    // NgProgressHttpModule,
    // ToastrModule.forRoot({
    //     timeOut: 10000,
    //     preventDuplicates: true,
    // }),
  ],
})
export class MainModule {}
