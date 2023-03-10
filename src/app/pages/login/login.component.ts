import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // eslint-disable-next-line no-underscore-dangle
  public userForm: FormGroup<any> = this._fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _auth: AuthService,
    private readonly _router: Router,
  ) { }

  public ngOnInit(): void {
    // eslint-disable-next-line no-underscore-dangle
    if (this._auth.getUserStatus()) {
      // eslint-disable-next-line no-underscore-dangle
      this._router.navigate(['/home']);
    }
  }

  public authenticateUser(): void {
    if (this.userForm.valid) {
      const email: string = this.userForm.controls['email'].value;
      const password: string = this.userForm.controls['password'].value;
      // eslint-disable-next-line no-underscore-dangle
      this._auth.updateStatus(email, password);
    }
    // eslint-disable-next-line no-underscore-dangle
    if (this._auth.getUserStatus()) {
      // eslint-disable-next-line no-underscore-dangle
      this._router.navigate(['/home']);
    } else {
      alert('Credenciais Inválidas');
    }
  }
}
