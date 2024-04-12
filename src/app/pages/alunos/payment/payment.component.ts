import { Component } from '@angular/core';
import { CustomerService } from './service';
import { Customer } from './customer';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
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

}
