import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as ui from './../../shared/ui.actions';

import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {
  registroForm!: FormGroup;
  cargando: boolean = false;
  uiSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.uiSubscription = this.store.select('ui').subscribe((ui) => {
      this.cargando = ui.isLoading;
    });
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  crearUsuario() {
    if (this.registroForm.invalid) return;
    this.store.dispatch(ui.isLoading());

    // Swal.fire({
    //   title: 'Espere por favor...',
    //   didOpen: () => {
    //     Swal.showLoading();
    //   },
    // });

    const { nombre, correo, password } = this.registroForm.value;
    this.authService
      .crearUsuario(nombre, correo, password)
      .then((credenciales) => {
        this.store.dispatch(ui.stopLoading());
        // Swal.close();
        this.router.navigate(['/']);
      })
      .catch((e) => {
        this.store.dispatch(ui.stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e.message,
        });
      });
  }
}
