import { Component } from '@angular/core';
import { AlunoService } from 'src/app/api/aluno.service';
import { Customer } from './customer';

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

    constructor(private alunoService: AlunoService) {
        this.customers = []
     }


    ngOnInit() {
        this.alunos()
    }


    alunos(){
        this.alunoService.alunos().subscribe((alunos) => {
            this.listagemAlunos = alunos;
            console.log(this.listagemAlunos);
        });
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
