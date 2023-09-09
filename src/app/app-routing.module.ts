import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutComponent } from './shared/layout/app.layout.component';
import { AlunosFormComponent } from './pages/alunos/alunos-form/alunos-form.component';
import { AlunosListComponent } from './pages/alunos/alunos-list/alunos-list.component';
import { AlunosEditComponent } from './pages/alunos/alunos-edit/alunos-edit.component';
import { AlunosViewComponent } from './pages/alunos/alunos-view/alunos-view.component';
import { LoginComponent } from './shared/demo/components/auth/login/login.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: () => import('./shared/demo/components/auth/login/login.module').then(m => m.LoginModule) },

            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    // { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'alunos', loadChildren: () => import('./pages/alunos/alunos.module').then(m => m.AlunosModule) },
                    {path: 'cadastro-aluno', component: AlunosFormComponent },
                    {path: 'edicao-aluno', component: AlunosEditComponent },
                    {path: 'visualizacao-aluno', component: AlunosViewComponent },
                    {path: 'parceiro', component: ParceirosComponent },

                    { path: 'financeiro', loadChildren: () => import('./pages/financeiro/financeiro.module').then(m => m.FinanceiroModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./shared/demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
