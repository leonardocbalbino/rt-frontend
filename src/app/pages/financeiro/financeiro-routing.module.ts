import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FinanceiroComponent } from './financeiro/financeiro.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component:  FinanceiroComponent}
    ])],
    exports: [RouterModule]
})
export class FinanceiroRoutingModule { }
