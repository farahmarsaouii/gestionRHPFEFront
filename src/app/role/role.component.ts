import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ChipRemoveEvent } from '@progress/kendo-angular-buttons';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { Privilege } from 'src/models/Privilege';
import { Role } from 'src/models/Role';
import { PrivilegeService } from 'src/services/privilege-service';
import { RoleService } from 'src/services/role-service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  gridData!:Role[];
  msg!:any;
listeprivileges!:Privilege[];

selectedPrivilege:any[] = [];

role!:Role;
public opened=false; 
public o = false;
public d =false;


@ViewChild('privilegelist') public list!: AutoCompleteComponent;

  constructor(private roleService:RoleService,private privilegeService:PrivilegeService) { }

  ngOnInit(): void {

    this.roleService.getRoles()
    .subscribe((data) => {
      this.gridData=data
      this.privilegeService.getPrivileges().subscribe((data) => {
        this.listeprivileges=data;
      });
    });



  }
 
    annuler(){
      this.opened=false;
      }
  openedit(role:Role){
    this.o=true;
    this.role=role;
    }
    openDelete(role:any){
      this.role=role;
      this.d=true;
    
    
    }

  roleform = new FormGroup({});
  roleModel = new Role();
   //posteModel = this.poste;
   roleFields: FormlyFieldConfig[] = [
 
     {
       key: 'role',
       type: 'input',
       templateOptions: {
         type: 'role',
         label: 'Nom role :',
        placeholder: 'Nom du role',
         required: true,
       },
       validation: {
         messages: {
           required: 'nom du role est obligatoire !'
         }
       },
 
 
     }
    
   ]

    public open() {
      this.opened = true;
  }
  public close() {
        this.opened = false;
    }
    ajouter(roleModel:any){
 let r:Role= new Role;
 let liste:any[] = [];
 console.log("*******************************"+this.selectedPrivilege);
 //for(let s in this.selectedPrivilege){
 //liste.push(this.privilegeService.getPrivilegeByName(s));
//}
/*this.selectedPrivilege.forEach( (value) => {  
  liste.push(this.privilegeService.getPrivilegeByName(value));  
});  */

this.privilegeService.getPrivilegeByNames(this.selectedPrivilege).subscribe((data)=>{
  r.privileges=data;
      r.role=roleModel.role;
      this.roleService.addRole(r).subscribe((data)=>{this.msg=data;
      this.ngOnInit();
    this.opened=false;});
});
     /* r.privileges=liste;
      r.role=roleModel.role;
      this.roleService.addRole(r).subscribe((data)=>this.msg=data);*/

    }
    
    public valueChange(privilege: string): void {
      if (privilege === '') { return; }

      const privilegeData = this.privilegeService.getPrivilegeByName(privilege);
      //this.contacts.find((c) => c.label === contact);

      if (!this.selectedPrivilege.includes(privilegeData)) {
          this.selectedPrivilege.push(privilege);
    }

      this.list.reset();

      
  }

  public onRemove(e: ChipRemoveEvent): void {
      console.log('Remove event arguments: ', e);
      const index = this.selectedPrivilege.map(c => c.label).indexOf(e.sender.label);
      this.selectedPrivilege.splice(index, 1);
  }
  public onDelete(id:any,iditem:any): void {
    console.log('******************'+id+iditem);
}
updateRole(role : any){}
delete(){}
}
