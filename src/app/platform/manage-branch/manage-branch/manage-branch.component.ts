import { CommonModule } from '@angular/common';
import { ApiResponse, ApiService } from '../../../services/api-services';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ManageBranchService } from 'src/app/services/manage-branch.service';
declare interface JQuery<TElement extends HTMLElement> {
  carousel(): JQuery<TElement>;
}

declare let $: any;
@Component({
  selector: 'app-manage-branch',
  templateUrl: './manage-branch.component.html',
  styleUrls: ['./manage-branch.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManageBranchComponent implements OnInit {
  menuCategories: any[] = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private manageService: ManageBranchService
  ) {}

  ngOnInit(): void {
    this.getBranchData();
  }

  getBranchData() {
    this.manageService.getManageBranch().subscribe(
      (response) => {
        this.menuCategories = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToAddBranch() {
    this.router.navigate(['/hms-main/add-branch']);
  }
  activeIndex: number = 0;

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  getCardDetails(id: string) {
    this.apiService
      .get(`http://localhost:3001/api/building/branch/${id}`)
      .subscribe(
        (response: any) => {
          console.log('Card Details:', response);
        },
        (error: any) => {
          console.error('Error fetching card details:', error);
        }
      );
  }
}
