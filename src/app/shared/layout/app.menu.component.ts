import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administrativo',
                items: [
                    {
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']
                    },
                    {
                        label: 'Alunos', icon: 'pi pi-fw pi-home', routerLink: ['/alunos'],
                        // items: [
                        //     { label: 'Lista de Alunos', icon: 'pi pi-fw pi-bookmark' },
                        //     { label: 'Cadastrar Aluno', icon: 'pi pi-fw pi-bookmark' },
                        // ]
                    },
                    {
                        label: 'Financeiro', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                        // items: [
                        //     { label: 'Pagamentos', icon: 'pi pi-fw pi-bookmark' },
                        //     { label: 'Custo', icon: 'pi pi-fw pi-bookmark' },
                        // ]
                    },
                    // {
                    //     label: 'Corridas', icon: 'pi pi-fw pi-home', routerLink: ['/']
                    // }
                ]
            },

            {
                label: 'Financeiro do aluno',
                items: [
                    {
                        label: 'Financeiro', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                        // items: [
                        //     { label: 'Pagamentos', icon: 'pi pi-fw pi-bookmark' },
                        //     { label: 'Custo', icon: 'pi pi-fw pi-bookmark' },
                        // ]
                    }
                ]
            },
            // {
            //     label: 'Eventos',
            //     items: [
            //         {
            //             label: 'Menu', icon: 'pi pi-fw pi-home', routerLink: ['/']
            //         },
            //     ]
            // },
            // {
            //     label: 'Treino',
            //     items: [
            //         {
            //             label: 'Menu', icon: 'pi pi-fw pi-home', routerLink: ['/']
            //         },
            //     ]
            // },
            // {
            //     label: 'Avaliações',
            //     items: [
            //         {
            //             label: 'Menu', icon: 'pi pi-fw pi-home', routerLink: ['/']
            //         },
            //     ]
            // },

            {
                label: 'Família RT',
                items: [
                    {
                        label: 'Loja RT', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                    },
                    {
                        label: 'Parceiros', icon: 'pi pi-fw pi-home', routerLink: ['/']
                    },
                ]
            },
        ];
    }
}
