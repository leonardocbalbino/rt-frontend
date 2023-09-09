import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/api/aluno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent {
    listagemAlunos: any;

    first = 0;
    rows = 10;

    form: FormGroup;

    constructor(
        private alunoService: AlunoService,
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            nome: ['',],
            cpf: ['',],
        });
     }


    // ngOnInit() {
    //     this.alunos()
    // }

    alunos() {
        const cpfFiltrado = this.form.value.cpf;
        const nomeFiltrado = this.form.value.nome;

        this.alunoService.buscarAlunos(cpfFiltrado, nomeFiltrado).subscribe(
          (response) => {
            console.log("response", response)
            if (response) {
              this.listagemAlunos = response;
            } else {
              console.error('Resposta inválida do servidor.');
            }
          },
          (error) => {
            console.error('Erro ao buscar alunos:', error);
          }
        );
      }
}

