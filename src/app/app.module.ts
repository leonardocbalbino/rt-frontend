import { NgModule, LOCALE_ID } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppLayoutModule } from './shared/layout/app.layout.module';
import { AuthGuard } from './auth/auth.guard';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { CustomerService } from './pages/alunos/payment/service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        CustomerService,
        AuthGuard,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
