import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData;
  log;

  constructor(private router:Router, private formbuilder:FormBuilder, private service:AppService) {
    this.loginData = this.formbuilder.group({
      username: '',
      password: ''
    })
  }

  onSubmit(){
    console.log(this.loginData.value.username)
    console.log(this.loginData.value.password)

    this.log = {
      username: this.loginData.value.username,
      password: this.loginData.value.password
    }

    console.log(this.log)

    this.service.postLogin(this.log).subscribe(data => {
      console.log(data);
    },error=>{
      console.log(error)
    })

    this.router.navigateByUrl("dashboard");
  }

  
  ngOnInit() {
  }

}