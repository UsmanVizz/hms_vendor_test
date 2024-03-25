import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageRoutingModule, } from './mainpage-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
// import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        NavBarComponent,
        SideBarComponent,
        MainPageComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MainPageRoutingModule,
        // MatIconModule
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

    ]
})
export class MainModule { }