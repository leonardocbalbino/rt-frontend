import { Component } from '@angular/core';
import { AlunoService } from 'src/app/api/aluno.service';
import { Customer } from './customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunosListComponent {
    listagemAlunos: any;

    customers: Customer[];

    first = 0;

    rows = 10;

    receita: any

    totalAlunos: any

    constructor(
        private alunoService: AlunoService,
        private router: Router,
    ) {
        this.customers = []
     }


    ngOnInit() {
        this.alunos()
        this.dashbord()
    }

    alunos(){
        this.alunoService.alunos().subscribe((alunos) => {
            this.listagemAlunos = alunos.alunos;
            console.log(this.listagemAlunos);
        });
    }

    dashbord(){
        this.alunoService.alunos().subscribe((alunos) => {
            this.totalAlunos = alunos.total_alunos.total_alunos
            this.receita = alunos.valor_previsto.valor
        });
    }

    goToRegister() {
        this.router.navigate([`cadastro-aluno`]);
    }

    goToEdit() {
        this.router.navigate([`edicao-aluno`]);
    }

    goToView(item: any) {
        this.router.navigate([`visualizacao-aluno`], { state: item });
    }

    goToPayment() {
        this.router.navigate([`pagamento`]);
    }

    // next() {
    //     this.first = this.first + this.rows;
    // }

    // prev() {
    //     this.first = this.first - this.rows;
    // }

    // reset() {
    //     this.first = 0;
    // }

    // isLastPage(): boolean {
    //     return this.customers ? this.first === (this.customers.length - this.rows): true;
    // }

    // isFirstPage(): boolean {
    //     return this.customers ? this.first === 0 : true;
    // }

}
