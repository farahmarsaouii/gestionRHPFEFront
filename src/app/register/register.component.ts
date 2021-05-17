import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FileRestrictions, RemoveEvent,SelectEvent } from '@progress/kendo-angular-upload';
import { Role } from 'src/models/Role';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';
import { EquipeService } from 'src/services/equipe-service';
import { PosteService } from 'src/services/poste-service';
import { RoleService } from 'src/services/role-service';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users!:User[];
roles!:Role[];
roleUser!:Role;
user!:User;
public opened=false; 
msg!:any;
public o = false;
public d =false;
image!:any;

constructor(private formBuilder: FormBuilder,private authenticationService :AuthenticationService,private router:Router,
  private equipeService:EquipeService,private posteService:PosteService,private roleService:RoleService) { }
ngOnInit(): void {
  let rep = this.authenticationService.findUsers().subscribe((data) => {
    this.users = data;
  });
 
}

public close() {
  this.o=false;
      this.opened = false;
      this.d=false;
  }
    public open() {
      this.opened = true;
  }
  annuler(){
    this.opened=false;
    }
    openedit(user:User){
    this.o=true;
    this.user=user;
    }
    openDelete(user:any){
      this.user=user;
      this.d=true;
    
    
    }

feedback: any = {};
userform = new FormGroup({});
userModel = new User();
options: FormlyFormOptions = {};
  userFields: FormlyFieldConfig[] = [
    
    {
    key: 'userName',
    type: 'input',
    templateOptions: {
      type: 'nom',
      label: 'Nom et prénom ', 
      placeholder: 'Nom utilisateur',
      required: true,
    },
    validation :{
      messages:{
      required :'Nom obligatoire !'
    }
  }
  },
  {
    key: 'cin',
    type: 'input',
    templateOptions: {
      type: 'number',
      label: 'CIN',   
      placeholder: 'CIN utilisateur',
      required: true,
      minLengths : 8,
      maxLength :8,
      
    },
    validation :{
      messages:{
      required :'CIN obligatoire !'
    }
  }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Adresse Email',
      placeholder: 'Email utilisateur',
      required: true,
    },
    validation :{
      messages:{
      required :'Email obligatoire !'
    }
  },
  
  
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Mot de passe :',
      placeholder: 'mot de passe utilisateur',
      required: true,
    },
    validation : {
      messages: {
      required :'password est obligatoire !' } }
  },
  {
    key: 'repassword',
    type: 'input',
    templateOptions: {
      type: 'password',
      label: 'Confirmer le mot de passe :',
      placeholder: 'mot de passe utilisateur',
      required: true,
    },
    validation : {
      messages: {
      required :'repassword est obligatoire !' } }
  },
    {
      key: 'role',
      type: 'select',
      templateOptions: {
        label: 'Role :',
        options:this.authenticationService.findRoles(),
        
        valueProp: 'id',
        labelProp: 'role',
      },
    },
    {
      key: 'equipe',
      type: 'select',
      templateOptions: {
        label: 'Equipe :',
        options:this.equipeService.getEquipes(),
        valueProp: 'id',
        labelProp: 'nomEquipe',
      },
    },
    {
      key: 'superieur',
      type: 'select',
      templateOptions: {
        label: 'Superieur hiérarchique :',
        options:this.authenticationService.findUsers(),
        valueProp: 'id',
        labelProp: 'userName',
      },
    },
    {
      key: 'poste',
      type: 'select',
      templateOptions: {
        label: 'Poste :',
        options:this.posteService.getPostes(),
        valueProp: 'id',
        labelProp: 'nomPoste',
      },
    },

];
 userBack !: User;
 ajouter(user :any) {
   
    //console.log(user.role);var id=user.role.value;
    //var role=user.role.label;

    console.log(this.roles);
    this.userBack=user;
   // this.userBack.role.id=user.role.value;
   // this.userBack.role.role=user.role.label;

   // this.userBack.equipe.id=user.equipe.value;
   // this.userBack.equipe.nomEquipe=user.equipe.label;

 //   this.userBack.poste.id=user.poste.value;
  //  this.userBack.poste.nomPoste=user.poste.label;
   

      if(user.password!=user.repassword){
        alert("Use the same password");
      }
      else{
        const formData = new FormData();

        this.roleService.getRole(user.role.value).subscribe((data)=>{this.userBack.role=data;
        this.authenticationService.findUser(user.superieur.value).subscribe((data)=>{this.userBack.superieur=data;
        this.equipeService.getEquipe(user.equipe.value).subscribe((data)=>{this.userBack.equipe=data;
        this.posteService.getPoste(user.poste.value).subscribe(
          (data)=>{this.userBack.poste=data;
            formData.append('user',JSON.stringify(this.userBack));
            formData.append('file',this.image);
          this.authenticationService.register(formData)
          .subscribe((data)=>{
            this.msg=data;
            this.ngOnInit();
            this.opened = false;
           });

          });
           });
          });
        });
    }
  }

  
  
  updateUser(user : any){
console.log(user);
   this.roleService.getRole(user.role.value).subscribe((data)=>{user.role=data;
    this.authenticationService.findUser(user.superieur.value).subscribe((data)=>{user.superieur=data;
    this.equipeService.getEquipe(user.equipe.value).subscribe((data)=>{user.equipe=data;
    this.posteService.getPoste(user.poste.value).subscribe(
      (data)=>{user.poste=data;
    
        user.id=this.user.id;
        this.authenticationService.editUser(user).subscribe((data)=>{
         this.msg=data;
         this.ngOnInit();
         this.o = false;
        });

      });
       });
      });
    });
  }
  
  delete(){
    this.authenticationService.deleteUser(this.user.id).subscribe((data)=>{
      this.msg=data;
      this.ngOnInit();
      this.d=false;
  
     });
    }
    public events: string[] = [];
    public imagePreviews: any[] = [];
  
    public fileRestrictions: FileRestrictions = {
      allowedExtensions: [".jpg", ".png"],
    };

    
    public selectEventHandler(e: SelectEvent): void {
    
       /* if(e.target.files.length < 0)
      { const img=e.target.files[0];
      this.userimg=img;
      
      var mimeType=e.target.files[0].type;
      if(mimeType.match(/image\/*/ /*) ==  null{
      this.msg ="only img are suppoeted";
      return;}
      var reader =new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) =>{
      this.imgURL=reader.result;}
      }*/
      const that = this;
      this.image=e.files[0];
      e.files.forEach((file) => {
        console.log(`File selected: ${file.name}`);
  
       if (!file.validationErrors) {
         const reader = new FileReader();
  
          reader.onload = function (ev?) {
          
            const image = {
              src: ev.target!["result"] ,
              uid: file.uid,
            };
  
            that.imagePreviews.unshift(image);
          };
  
          reader.readAsDataURL(file.rawFile!);
        }
      });
    }

}
