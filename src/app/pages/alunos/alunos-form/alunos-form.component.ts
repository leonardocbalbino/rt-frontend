import { Component, createPlatform } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/api/aluno.service';
import { PlanoService } from 'src/app/api/plano.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent {
    planos: any = [];
    status: any = [
        { value: 0, label: '' },
        { value: 1, label: 'Ativo' },
        { value: 2, label: 'Inativo'}
    ];

    estadoCivil: any = [
        { value: 0, label: '' },
        { value: 1, label: 'Solteiro' },
        { value: 2, label: 'Casado' },
        { value: 2, label: 'Viuvo' },
        { value: 2, label: 'Divorciado' },
        { value: 2, label: 'União Estável '}
    ];

    genero: any = [
        { value: 0, label: '' },
        { value: 1, label: 'Masculino' },
        { value: 2, label: 'Feminino'}
    ];

    admin: any = [
        { value: 0, label: '' },
        { value: 1, label: 'Sim' },
        { value: 2, label: 'Não'}
    ];

    form: FormGroup;


    constructor(
        private router: Router,
        private alunoService: AlunoService,
        private planoService: PlanoService,
        private formBuilder: FormBuilder,
    ){
        this.form = this.formBuilder.group({
            nome: ['', [Validators.required]],
            email: ['', Validators.required],
            cpf: [''],
            rg: [''],
            dataNascimento: [''],
            contatoEmegencia: [''],
            profissao: [''],
            genero: [''],
            estadoCivil: [''],
            plano: [''],
            status: [''],
            vencimento: [''],
            valorPagamento: [''],
            restricoes: [''],
            observacao: [''],
            admin: [''],
            senha: [''],
            telefone: [''],
            cep: [''],
            ddd: [''],
            numero_casa: [''],
            logradouro: [''],
            bairro: [''],
            cidade: [''],
        });
    }

    ngOnInit() {
        this.getPlan()
    }

    getPlan(){
        this.planoService.planos().subscribe((planos) => {
            this.planos = planos
            console.log(planos)
        });
    }

    toBack(){
        this.router.navigateByUrl(`/alunos`);
    }

    save(){
        const form = {
            nome: this.form.value.nome,
            data_nascimento: this.form.value.dataNascimento,
            cpf: this.form.value.cpf,
            rg: this.form.value.rg,
            email: this.form.value.email,
            contato_emegencia: this.form.value.contatoEmegencia,
            genero: this.form.value.genero,
            profissao: this.form.value.profissao,
            plano_id: this.form.value.plano,
            valor_previsto: this.form.value.valorPagamento,
            vencimento: this.form.value.vencimento,
            estado_civil: this.form.value.estadoCivil,
            status: this.form.value.status,
            observacoes: this.form.value.observacao,
            restricoes: this.form.value.restricoes,
            admin_ativado: this.form.value.admin,
            password: this.form.value.senha,
            telefone_principal: this.form.value.telefone,
            cep: this.form.value.cep,
            ddd: this.form.value.ddd,
            numero_endereco: this.form.value.numero_casa,
            logradouro: this.form.value.logradouro,
            bairro: this.form.value.bairro,
            cidade: this.form.value.cidade,
        }
        console.log("form", form)
        this.alunoService.cadastrarAluno(form).subscribe((data) => {
            console.log(data)
        });
    }

}
