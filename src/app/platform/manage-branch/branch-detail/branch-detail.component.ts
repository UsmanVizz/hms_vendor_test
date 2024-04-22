import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, LazyLoadImageModule],
})
export class BranchDetailComponent implements OnInit {
  category: any;

  defaultImage = '../../../../assets/images/default-img.gif';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = history.state.category;
  }
}
