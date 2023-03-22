import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosListComponent } from './alunos-list/alunos-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AlunosListComponent }
    ])],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
