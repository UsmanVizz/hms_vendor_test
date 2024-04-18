import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hall-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hall-detail.component.html',
  styleUrls: ['./hall-detail.component.scss'],
})
export class HallDetailComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = history.state.data;
  }
}
