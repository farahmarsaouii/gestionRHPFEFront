import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/models/user';
import { AuthenticationService } from 'src/services/authentication-service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {/*  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
  
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  public submitForm(): void {
    console.log("*******************"+this.registerForm.value);
    this.registerForm.markAllAsTouched();
}

public clearForm(): void {
    this.registerForm.reset();
}*/
constructor(private formBuilder: FormBuilder,private authService :AuthenticationService,private router:Router) { }
ngOnInit(): void {
  
}
feedback: any = {};
Userform = new FormGroup({});
UserModel = new User();
  UserFields: FormlyFieldConfig[] = [{
    key: 'userName',
    type: 'input',
    templateOptions: {
      type: 'nom',
      label: 'Nom',
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
    key: 'prenom',
    type: 'input',
    templateOptions: {
      type: 'prenom',
      label: 'Prénom :',
      placeholder: 'Prénom utilisateur',
      required: true,
    },
    validation : {
      messages: {
      required :'Prénom est obligatoire !' } }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email addresse',
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
      label: 'mot de passe :',
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
      label: 'verification mot de passe :',
      placeholder: 'verification mot de passe utilisateur',
      required: true,
    },
    validation : {
      messages: {
      required :'la vérification du mot de passe est obligatoire !' } }
  },

    {
      key: 'Role',
      type: 'select',
      templateOptions: {
        label: 'Role',
        options: [
          { id: '1', name: 'Soccer' },
          { id: '2', name: 'Basketball' },
        ],
        valueProp: 'id',
        labelProp: 'name',
      },
    },

];
 
  register(user :User) {
    console.log(user);
  
      if(user.password!=user.repassword){
        alert("Use the same password");
      }
      else{

        
          this.authService.register(user)
          .subscribe(resp=>{

            this.feedback = {type: 'success', message: 'successful!'};

          },err=>{
            this.feedback = {type: 'warning', message: 'Error deleting.'};
          })

      

    }
  }






}
