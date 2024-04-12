import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './alunos-list/alunos-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosViewComponent } from './alunos-view/alunos-view.component';
import { AlunosEditComponent } from './alunos-edit/alunos-edit.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { PaymentComponent } from './payment/payment.component';
import { TagModule } from 'primeng/tag';
import { CustomerService } from './payment/service';

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
        AlunosRoutingModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        DropdownModule,
        CalendarModule,
        ReactiveFormsModule,
        TagModule
    ],
    declarations: [
    AlunosListComponent,
    AlunosFormComponent,
    AlunosViewComponent,
    AlunosEditComponent,
    ParceirosComponent,
    PaymentComponent
  ],
//   providers: [ CustomerService ]
})
export class AlunosModule { }
