import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterNetBankingComponent } from './register-net-banking/register-net-banking.component';
import { LoginNetBankingComponent } from './login-net-banking/login-net-banking.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { GeneratedDetailsComponent } from './generated-details/generated-details.component';
import { NetBankHmeComponent } from './net-bank-hme/net-bank-hme.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { DepositComponent } from './deposit/deposit.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { GetAccountDetailsComponent } from './get-account-details/get-account-details.component';
import { AuthGetAccountDetailsComponent } from './auth-get-account-details/auth-get-account-details.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environment/environment';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminMessegesComponent } from './admin-messeges/admin-messeges.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { AllAccountUsersComponent } from './all-account-users/all-account-users.component';
import { GraphComponent } from './graph/graph.component';
import { BranchesComponent } from './branches/branches.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserAllTransComponent } from './user-all-trans/user-all-trans.component';



@NgModule({
    declarations: [
        AppComponent,
        PersonalDetailsComponent,
        RegisterNetBankingComponent,
        LoginNetBankingComponent,
        HomeComponent,
        CurrencyExchangeComponent,
        AdminLoginComponent,
        AdminHomeComponent,
        GeneratedDetailsComponent,
        NetBankHmeComponent,
        ViewUserDetailsComponent,
        RegisterSuccessComponent,
        DepositComponent,
        GetAccountDetailsComponent,
        AuthGetAccountDetailsComponent,
        AdminMessegesComponent,
        AllTransactionsComponent,
        AllAccountUsersComponent,
        GraphComponent,
        BranchesComponent,
        AdminRegisterComponent,
        AdminSidebarComponent,
        UserAllTransComponent


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule 
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        FlexLayoutModule,
        FlexLayoutServerModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        NgxChartsModule






    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
