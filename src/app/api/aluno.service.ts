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

}
