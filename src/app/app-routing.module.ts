import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RegisterNetBankingComponent } from './register-net-banking/register-net-banking.component';
import { LoginNetBankingComponent } from './login-net-banking/login-net-banking.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { GeneratedDetailsComponent } from './generated-details/generated-details.component';
import { NetBankHmeComponent } from './net-bank-hme/net-bank-hme.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { DepositComponent } from './deposit/deposit.component';
import { GetAccountDetailsComponent } from './get-account-details/get-account-details.component';
import { AuthGetAccountDetailsComponent } from './auth-get-account-details/auth-get-account-details.component';
import { AdminMessegesComponent } from './admin-messeges/admin-messeges.component';
import { AllAccountUsersComponent } from './all-account-users/all-account-users.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { BranchesComponent } from './branches/branches.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserAllTransComponent } from './user-all-trans/user-all-trans.component';

const routes: Routes = [
  { path: 'RegisterUser', component: RegisterNetBankingComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'loginUser', component: LoginNetBankingComponent },
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'exchange', component: CurrencyExchangeComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'genDetails', component: GeneratedDetailsComponent },
  { path: 'netBankHome', component: NetBankHmeComponent },
  { path: 'viewUserDetails', component: ViewUserDetailsComponent },
  { path: 'regSucc', component: RegisterSuccessComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'getAccStatus', component: GetAccountDetailsComponent },
  { path: 'authgetAccStatus', component: AuthGetAccountDetailsComponent },
  { path: 'msgReq', component: AdminMessegesComponent },
  { path: 'allUsers', component: AllAccountUsersComponent },
  { path: 'allTrans', component: AllTransactionsComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'adminRegister', component: AdminRegisterComponent },
  { path: 'adminSide', component: AdminSidebarComponent },

  { path: 'userAllTrans', component: UserAllTransComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
