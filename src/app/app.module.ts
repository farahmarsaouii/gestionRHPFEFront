import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication-service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ControlService } from './control.service';
import { RoleComponent } from './role/role.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RegisterComponent } from './register/register.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyKendoModule } from '@ngx-formly/kendo';
import { OrganigramComponent } from './organigram/organigram.component';
import { DocumentAdministratifComponent } from './document-administratif/document-administratif.component';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconsModule } from '@progress/kendo-angular-icons';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { InfoDocumentAdministratifComponent } from './info-document-administratif/info-document-administratif.component';
import { DocumentsService } from 'src/services/documents-service';
import { HistoriqueDemandeComponent } from './historique-demande/historique-demande.component';
import { DemandeDocumentsService } from 'src/services/demandeDocuments-service';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ListeDocumentsComponent } from './liste-documents/liste-documents.component';
import { PlanDeCarriereComponent } from './plan-de-carriere/plan-de-carriere.component';



//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TestComponent,
    RoleComponent,
    AdminHomeComponent,
    RegisterComponent,
    OrganigramComponent,
    DocumentAdministratifComponent,
    InfoDocumentAdministratifComponent,
    HistoriqueDemandeComponent,
    AddDocumentComponent,
    ListeDocumentsComponent,
    PlanDeCarriereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InputsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    PopupModule,
    LabelModule,
    ReactiveFormsModule,
    FormlyKendoModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    ListViewModule,
    LayoutModule,
    IconsModule,
    WindowModule,
    PDFExportModule,
    //FormlyBootstrapModule,
   
  ],
  providers: [AuthenticationService,ControlService,DocumentsService,DemandeDocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
