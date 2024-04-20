import { Component } from '@angular/core';
import { CustomerService } from './service';
import { Customer } from './customer';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/api/aluno.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
    customers!: Customer[];

    title: any;

    constructor(
        private customerService: CustomerService,
        private router: Router,
        private alunoService: AlunoService,
    ) {}

    ngOnInit() {
        this.alunoService.getPagamentos(history.state.id).subscribe((res) => {
            console.log(res)
        });





        console.log(" history.state",  history.state)
        this.title = history.state.nome

        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    getSeverity(status: string): string {
        switch (status) {
            case 'Atrasado':
                return 'danger';
            case 'Pago':
                return 'success';
            // case 'new':
            //     return 'info';
            case 'Aberto':
                return 'warning';
            // case 'renewal':
            //     return 'none';
            default:
                return 'none';
        }
    }

    toBack(){
        this.router.navigateByUrl(`/alunos`);
    }

}
