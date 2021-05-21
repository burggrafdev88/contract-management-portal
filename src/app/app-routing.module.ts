import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {MasterAgreementAddComponent} from './master-agreement-add/master-agreement-add.component';
import {ContractorAddComponent} from './contractor-add/contractor-add.component';

const routes: Routes = [
  {
    path: 'contractor-add',
    component: ContractorAddComponent
  },
  {
    path: 'master-agreement-add',
    component: MasterAgreementAddComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
