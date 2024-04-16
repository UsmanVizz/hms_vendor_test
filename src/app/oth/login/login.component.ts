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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.userLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  userLoggedIn() {
    console.log(this.userLogin.value);

    this.router.navigate(['hms-main']);
  }

  forgotPassword() {
    console.log('Forgot Password');
  }
}
