import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

  constructor(private http: HttpClient) { }

  alunos(): Observable<any> {
    const endpoint = `${environment.api}`;
    return this.http.get<any>(`${endpoint}/alunos`);
  }

  cadastrarAluno(dados: any): Observable<any> {
    const endpoint = `${environment.api}`;
    return this.http.post<any>(`${endpoint}/alunos`, JSON.stringify(dados), this.httpOptions);
  }

  buscarAlunos(cpf?: string, nome?: string): Observable<any> {
    // Defina parâmetros de consulta (CPF e/ou Nome) se eles estiverem definidos
    let params = new HttpParams();
    if (cpf) {
      params = params.set('cpf', cpf);
    }
    if (nome) {
      params = params.set('nome', nome);
    }

    const endpoint = `${environment.api}`;
    return this.http.get<any>(`${endpoint}/pesquisar-alunos`, { params });
  }

  getPagamentos(id: number): Observable<any> {
    const endpoint = `${environment.api}`;
    return this.http.get<any>(`${endpoint}/pagamentos/aluno/${id}`);
  }

}
