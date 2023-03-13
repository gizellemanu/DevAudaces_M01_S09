import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private email:string = 'gizellemanu@hotmail.com';
  private password:string = '951623784';

  private getCredentialsValidity(
    email:string,
    password:string,
  ): boolean {
    return this.email === email
    && this.password === password;
  }

  private setUserStatus(status: boolean): void {
    window.sessionStorage.setItem('logado', status.toString());
  }

  public getUserStatus(): boolean {
    return window.sessionStorage.getItem('logado') === 'true';
  }

  public updateStatus(email: string, password: string): void {
    if (!this.getUserStatus()) {
      this.setUserStatus(
        this.getCredentialsValidity(email, password),
      );
    }
  }
}
