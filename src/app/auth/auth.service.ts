import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'; // Adicione esta importação
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'URL_DO_SEU_BACKEND'; // Substitua pela URL do seu backend de autenticação
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    const endpoint = `${environment.api}`;
    return this.http.post(`${endpoint}/autenticar`, credentials).pipe(
      // Aqui você atualiza o estado de autenticação para verdadeiro após o login bem-sucedido
      tap(() => {
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

//   register(user: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }

//   logout(): Observable<any> {
//     // Implemente a lógica para fazer logout no backend, se necessário
//     return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
//       // Aqui você atualiza o estado de autenticação para falso após o logout bem-sucedido
//       tap(() => {
//         this.isAuthenticatedSubject.next(false);
//       })
//     );
//   }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
