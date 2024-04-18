import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-branch-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.scss'],
})
export class BranchDetailComponent implements OnInit {
  category: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = history.state.category;
  }
}
