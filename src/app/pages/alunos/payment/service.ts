import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
    getData() {
        return [
            {
                id: 1000,
                name: 'Janeiro',
                country: {
                    name: 'R$ 100,00',
                    code: 'dz'
                },
                company: 'Longão',
                date: '2015-09-13',
                status: 'Atrasado',
                verified: true,
                activity: 17,
                representative: {
                    name: '2024',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'Fevereiro',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2019-02-09',
                status: 'Aberto',
                verified: true,
                activity: 0,
                representative: {
                    name: '2024',
                    image: 'amyelsner.png'
                },
                balance: 82429
            },
            {
                id: 1002,
                name: 'Março',
                country: {
                    name: 'R$ 100,00',
                    code: 'pa'
                },
                company: 'Longão',
                date: '2017-05-13',
                status: 'Pago',
                verified: false,
                activity: 63,
                representative: {
                    name: '2024',
                    image: 'asiyajavayant.png'
                },
                balance: 28334
            },
            {
                id: 1003,
                name: 'Abril',
                country: {
                    name: 'R$ 100,00',
                    code: 'si'
                },
                company: 'Longão',
                date: '2020-09-15',
                status: 'Pago',
                verified: false,
                activity: 37,
                representative: {
                    name: '2024',
                    image: 'xuxuefeng.png'
                },
                balance: 88521
            },
            {
                id: 1004,
                name: 'Junho',
                country: {
                    name: 'R$ 100,00',
                    code: 'za'
                },
                company: 'Longão',
                date: '2016-05-20',
                status: 'Pago',
                verified: true,
                activity: 33,
                representative: {
                    name: '2024',
                    image: 'asiyajavayant.png'
                },
                balance: 93905
            },
            {
                id: 1005,
                name: 'Agosto',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2018-02-16',
                status: 'Pago',
                verified: false,
                activity: 68,
                representative: {
                    name: '2024',
                    image: 'ivanmagalhaes.png'
                },
                balance: 50041
            },
            {
                id: 1006,
                name: 'Setemnbro',
                country: {
                    name: 'R$ 100,00',
                    code: 'py'
                },
                company: 'Longão',
                date: '2018-02-19',
                status: 'Pago',
                verified: true,
                activity: 54,
                representative: {
                    name: '2024',
                    image: 'ivanmagalhaes.png'
                },
                balance: 58706
            },
            {
                id: 1007,
                name: 'Outubro',
                country: {
                    name: 'R$ 100,00',
                    code: 'rs'
                },
                company: 'Longão',
                date: '2019-08-13',
                status: 'Pago',
                verified: true,
                activity: 69,
                representative: {
                    name: '2024',
                    image: 'onyamalimba.png'
                },
                balance: 26640
            },
            {
                id: 1008,
                name: 'Novembro',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2018-11-21',
                status: 'Pago',
                verified: true,
                activity: 76,
                representative: {
                    name: '2024',
                    image: 'ivanmagalhaes.png'
                },
                balance: 65369
            },
            {
                id: 1009,
                name: 'Dezembro',
                country: {
                    name: 'R$ 100,00',
                    code: 'mx'
                },
                company: 'Longão',
                date: '2015-07-07',
                status: 'Pago',
                verified: false,
                activity: 3,
                representative: {
                    name: '2024',
                    image: 'onyamalimba.png'
                },
                balance: 63451
            },
            //
            {
                id: 1000,
                name: 'Janeiro',
                country: {
                    name: 'R$ 100,00',
                    code: 'dz'
                },
                company: 'Longão',
                date: '2015-09-13',
                status: 'Atrasado',
                verified: true,
                activity: 17,
                representative: {
                    name: '2025',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'Fevereiro',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2019-02-09',
                status: 'Aberto',
                verified: true,
                activity: 0,
                representative: {
                    name: '2025',
                    image: 'amyelsner.png'
                },
                balance: 82429
            },
            {
                id: 1002,
                name: 'Março',
                country: {
                    name: 'R$ 100,00',
                    code: 'pa'
                },
                company: 'Longão',
                date: '2017-05-13',
                status: 'Pago',
                verified: false,
                activity: 63,
                representative: {
                    name: '2025',
                    image: 'asiyajavayant.png'
                },
                balance: 28334
            },
            {
                id: 1003,
                name: 'Abril',
                country: {
                    name: 'R$ 100,00',
                    code: 'si'
                },
                company: 'Longão',
                date: '2020-09-15',
                status: 'Pago',
                verified: false,
                activity: 37,
                representative: {
                    name: '2025',
                    image: 'xuxuefeng.png'
                },
                balance: 88521
            },
            {
                id: 1004,
                name: 'Junho',
                country: {
                    name: 'R$ 100,00',
                    code: 'za'
                },
                company: 'Longão',
                date: '2016-05-20',
                status: 'Pago',
                verified: true,
                activity: 33,
                representative: {
                    name: '2025',
                    image: 'asiyajavayant.png'
                },
                balance: 93905
            },
            {
                id: 1005,
                name: 'Agosto',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2018-02-16',
                status: 'Pago',
                verified: false,
                activity: 68,
                representative: {
                    name: '2025',
                    image: 'ivanmagalhaes.png'
                },
                balance: 50041
            },
            {
                id: 1006,
                name: 'Setemnbro',
                country: {
                    name: 'R$ 100,00',
                    code: 'py'
                },
                company: 'Longão',
                date: '2018-02-19',
                status: 'Pago',
                verified: true,
                activity: 54,
                representative: {
                    name: '2025',
                    image: 'ivanmagalhaes.png'
                },
                balance: 58706
            },
            {
                id: 1007,
                name: 'Outubro',
                country: {
                    name: 'R$ 100,00',
                    code: 'rs'
                },
                company: 'Longão',
                date: '2019-08-13',
                status: 'Pago',
                verified: true,
                activity: 69,
                representative: {
                    name: '2025',
                    image: 'onyamalimba.png'
                },
                balance: 26640
            },
            {
                id: 1008,
                name: 'Novembro',
                country: {
                    name: 'R$ 100,00',
                    code: 'eg'
                },
                company: 'Longão',
                date: '2018-11-21',
                status: 'Pago',
                verified: true,
                activity: 76,
                representative: {
                    name: '2025',
                    image: 'ivanmagalhaes.png'
                },
                balance: 65369
            },
            {
                id: 1009,
                name: 'Dezembro',
                country: {
                    name: 'R$ 100,00',
                    code: 'mx'
                },
                company: 'Longão',
                date: '2015-07-07',
                status: 'Pago',
                verified: false,
                activity: 3,
                representative: {
                    name: '2025',
                    image: 'onyamalimba.png'
                },
                balance: 63451
            }
        ];
    }

    constructor(private http: HttpClient) {}

    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};
