import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mode=0;
  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    let token=this.authService.loadToken();
    if(token) this.router.navigateByUrl("/home");
  }
onLogin(formData: NgForm){
  console.log(formData.value)
  this.authService.login(formData.value)
            .subscribe((resp) =>{ 
              let jwtToken=resp.headers.get('Authorization');
              console.log("******************"+resp.headers.get('Authorization'));
              if(!jwtToken) return;
              
               this.authService.saveToken(jwtToken);
                this.router.navigateByUrl('/home');
              }, 
               (err)=>{
                  this.mode=1;
               })
}

onRegister()
{ 
  this.router.navigateByUrl("/register");
}

}
