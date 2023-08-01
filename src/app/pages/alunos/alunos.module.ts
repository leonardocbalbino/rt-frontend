import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './alunos-list/alunos-list.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        ToolbarModule,
        AlunosRoutingModule
    ],
    declarations: [
    AlunosListComponent
  ]
})
export class AlunosModule { }
