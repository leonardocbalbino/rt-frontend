import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router
import { AuthService } from 'src/app/auth/auth.service';
import { LayoutService } from 'src/app/shared/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
  password!: string;
  cpf!: string;

  credentials = {
    login: '',
    password: '',
  };

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router // Injete o Router
  ) {}

  onSubmit() {
    this.credentials = {
      login: this.cpf,
      password: this.password,
    };
    console.log(this.credentials);

    this.authService.login(this.credentials).subscribe(
        (response) => {
          // Verifique o valor de admin_ativado após um login bem-sucedido
          if (response.usuario.admin_ativado === 1) {
            let isAdmin = response.usuario.admin_ativado
            localStorage.setItem('isAdmin', isAdmin);

            // O admin_ativado é igual a 1, siga o fluxo normal (redireciona para a página desejada)
            console.log('Login bem-sucedido', response);
            this.router.navigate(['/dashboard']); // Redirecionar para a página 'dashboard'

          } else if (response.usuario.admin_ativado === 0) {
            let isAdmin = response.usuario.admin_ativado
            localStorage.setItem('isAdmin', isAdmin);
            // O admin_ativado é igual a 0, redirecione para outra página
            console.log('Admin desativado, redirecionando para outra página');
            this.router.navigate(['/parceiro']); // Substitua com a página de redirecionamento desejada
          }
        },
        (error) => {
          // Trate erros de login aqui, como exibir uma mensagem de erro para o usuário
          console.error('Erro de login', error);
          // Exibir uma mensagem de erro para o usuário ou realizar outra ação apropriada
        }
      );
  }
}
