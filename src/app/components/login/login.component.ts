// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// Services
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService
      .loginUser(this.loginForm.value)
      .then((data) => {
        console.log(data);
        this.tokenStorage.saveToken();
        this.messageService.add({
          severity: 'success',
          summary: '¡¡¡Correcto!!!',
          detail: 'Se ha Logueado Correctamente',
        });
        this.router.navigateByUrl("resume");
        this.loginForm.reset()
      })
      .catch((data) => {
        console.log(data);
        this.messageService.add({
          severity: 'error',
          summary: '¡¡Error!!',
          detail: data,
        });
        this.loginForm.reset();
      });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }
}
