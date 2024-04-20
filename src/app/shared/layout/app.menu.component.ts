import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    isAdmin: any

    constructor(public layoutService: LayoutService) {
        this.isAdmin = localStorage.getItem('isAdmin');
        console.log("admin", this.isAdmin)
     }

    ngOnInit() {
        if(this.isAdmin == 1){
            this.model = [

                {
                    label: 'Administrativo',
                    items: [
                        {
                            label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'],
                        },
                        {
                            label: 'Alunos', icon: 'pi pi-fw pi-home', routerLink: ['/alunos'],
                            // items: [
                            //     { label: 'Lista de Alunos', icon: 'pi pi-fw pi-bookmark' },
                            //     { label: 'Cadastrar Aluno', icon: 'pi pi-fw pi-bookmark' },
                            // ]
                        },
                        {
                            label: 'Financeiro', icon: 'pi pi-fw pi-home', routerLink: ['/financeiro'],
                            // items: [
                            //     { label: 'Pagamentos', icon: 'pi pi-fw pi-bookmark' },
                            //     { label: 'Custo', icon: 'pi pi-fw pi-bookmark' },
                            // ]
                        },
                        // {
                        //     label: 'Corridas', icon: 'pi pi-fw pi-home', routerLink: ['/']
                        // }
                        // {
                        //     label: 'Parceiros', icon: 'pi pi-fw pi-home', routerLink: ['/parceiro']
                        // },

                    ]
                },
                //remover no futuro
                {
                    label: 'Administrativo',
                    items: [
                        {
                            label: 'Parceiros', icon: 'pi pi-fw pi-home', routerLink: ['/parceiro']
                        },

                    ]
                },

                // {
                //     label: 'Financeiro do aluno',
                //     items: [
                //         {
                //             label: 'Financeiro', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                //             // items: [
                //             //     { label: 'Pagamentos', icon: 'pi pi-fw pi-bookmark' },
                //             //     { label: 'Custo', icon: 'pi pi-fw pi-bookmark' },
                //             // ]
                //         }
                //     ]
                // },
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

                // {
                //     label: 'Família RT',
                //     items: [
                //         {
                //             label: 'Loja RT', icon: 'pi pi-fw pi-home', routerLink: ['/'],
                //         },
                //         {
                //             label: 'Parceiros', icon: 'pi pi-fw pi-home', routerLink: ['/']
                //         },
                //     ]
                // },
            ];
        }
        if(this.isAdmin != 1){
            this.model = [

                {
                    label: 'Administrativo',
                    items: [
                        {
                            label: 'Parceiros', icon: 'pi pi-fw pi-home', routerLink: ['/parceiro']
                        },

                    ]
                },


            ];
        }

    }
}
