import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { CompetencePosteComponent } from '../competence-poste/competence-poste.component';
import { ControlService } from '../control.service';
    import { DashboardComponent } from '../dashboard/dashboard.component'
import { DocumentAdministratifComponent } from '../document-administratif/document-administratif.component';
import { EquipeManagerComponent } from '../equipe-manager/equipe-manager.component';
import { FactureComponent } from '../facture/facture.component';
import { HistoriqueDemandeComponent } from '../historique-demande/historique-demande.component';
import { InfoDocumentAdministratifComponent } from '../info-document-administratif/info-document-administratif.component';
import { ListeDocumentsComponent } from '../liste-documents/liste-documents.component';
import { LoginComponent } from '../login/login.component';
import { OrganigramComponent } from '../organigram/organigram.component';
import { PlanDeCarriereUserComponent } from '../plan-de-carriere-user/plan-de-carriere-user.component';
import { PlanDeCarriereComponent } from '../plan-de-carriere/plan-de-carriere.component';
import { PostesComponent } from '../postes/postes.component';
import { RegisterComponent } from '../register/register.component';
import { RoleComponent } from '../role/role.component';
import { TestComponent } from '../test/test.component';

    const routes: Routes = [
      {path:'login',component:LoginComponent},
      {path:'home',component:DashboardComponent,
      children: [
        
        { path: '', component: AdminHomeComponent },
        { path: 'role', component: RoleComponent },
        { path: 'register', component: RegisterComponent },
        {path: 'organigram', component: OrganigramComponent},
        {path: 'facture', component: FactureComponent},
        {path: 'document', component: DocumentAdministratifComponent},
        {path: 'demandeDocument', component: HistoriqueDemandeComponent},
        {path: 'addDocument', component: AddDocumentComponent},
        {path: 'listDocument', component: ListeDocumentsComponent},
        {path: 'planDeCarriere', component: PlanDeCarriereComponent},
        {path: 'equipeManager', component: EquipeManagerComponent},
        {path: 'planDeCarriereUser/:id', component: PlanDeCarriereUserComponent},
        {path: 'postes', component: PostesComponent},
        {path: 'competencePoste/:id', component: CompetencePosteComponent},
        {path:'infoDocumentAdministratif/:id',component : InfoDocumentAdministratifComponent}
      ]},
     //,canActivate:[ControlService]
      {path:'',redirectTo:'/login',pathMatch:'full'}
    ];


    



    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
