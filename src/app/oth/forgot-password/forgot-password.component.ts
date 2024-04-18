import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class ForgotPasswordComponent implements OnInit {
  userLogin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.userLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {}

  userLoggedIn() {


    this.router.navigate(['reset-password']);
  }
  backToLogin() {
    this.router.navigate(['login']);

  }

}
