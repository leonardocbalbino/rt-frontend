import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosListComponent } from './alunos-list/alunos-list.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AlunosListComponent }
    ])],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
