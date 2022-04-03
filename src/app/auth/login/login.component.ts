import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  loginUsuario(): void {
    if (this.loginForm.invalid) return;
    Swal.fire({
      title: 'Espere por favor...',
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const { email, password } = this.loginForm.value;
    this.authService
      .loginUsuario(email, password)
      .then((credenciales) => {
        console.log(credenciales);
        Swal.close();
        this.router.navigate(['/']);
        console.log('Login:', credenciales);
      })
      .catch((e) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.message,
        })
      );
  }
}
