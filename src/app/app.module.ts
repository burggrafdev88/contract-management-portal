import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MasterAgreementAddComponent} from './master-agreement-add/master-agreement-add.component';
import { ContractorAddComponent } from './contractor-add/contractor-add.component';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorEditComponent } from './contractor-edit/contractor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MasterAgreementAddComponent,
    ContractorAddComponent,
    ContractorListComponent,
    ContractorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
