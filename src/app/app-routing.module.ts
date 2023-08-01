import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutComponent } from './shared/layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // { path: '', loadChildren: () => import('./shared/demo/components/auth/login/login.module').then(m => m.LoginModule) },

            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'alunos', loadChildren: () => import('./pages/alunos/alunos.module').then(m => m.AlunosModule) },
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
