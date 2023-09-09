import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
      if (this.authService.isAuthenticated()) {
        console.log("this.authService.isAuthenticated()", this.authService.isAuthenticated())
        return true; // O usuário está autenticado, permita o acesso à rota
      } else {
        this.router.navigate(['/auth/login']); // Redirecione para a página de login se não estiver autenticado
        return false;
      }
    }

    canActivateChild(): boolean {
      return this.canActivate(); // Este guarda é aplicado às rotas filhas da rota pai, então podemos reutilizar o canActivate.
    }
  }
