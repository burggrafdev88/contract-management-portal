import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MasterAgreementAddComponent} from './master-agreement-add/master-agreement-add.component';
import {ContractorAddComponent} from './contractor-add/contractor-add.component';
import {ContractorListComponent} from './contractor-list/contractor-list.component';

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
    path: 'contractor-list',
    component: ContractorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
