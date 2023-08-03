import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/api/aluno.service';
import { PlanoService } from 'src/app/api/plano.service';

@Component({
  selector: 'app-alunos-view',
  templateUrl: './alunos-view.component.html',
  styleUrls: ['./alunos-view.component.scss']
})
export class AlunosViewComponent {

    nome: any;
    email: any;
    rg: any;
    cpf: any;
    dataNascimento: any;
    contatoEmergecia: any;
    profissao: any;
    genero: any;
    estadoCivil: any;
    plano: any;
    status: any;
    vencimento: any;
    valor: any;
    restricoes: any;
    observacoes: any;

    constructor(
        private router: Router,
        private alunoService: AlunoService,
    ){}

    ngOnInit() {
        console.log(history.state);
        console.log(history.state.planos[0].nome);

        this.nome = history.state.nome
        this.email = history.state.email
        this.rg = history.state.rg
        this.cpf = history.state.cpf
        this.dataNascimento = history.state.data_nascimento
        this.contatoEmergecia = history.state.contato_emegencia
        this.profissao = history.state.profissao
        this.genero = history.state.genero
        this.estadoCivil = history.state.estado_civil_id
        this.plano = history.state.planos[0].nome
        this.status = history.state.status
        this.vencimento = history.state.vencimento
        this.valor = history.state.valor_previsto
        this.restricoes = history.state.restricoes
        this.observacoes = history.state.observacoes
    }

    toBack(){
        this.router.navigateByUrl(`/alunos`);
    }

}
