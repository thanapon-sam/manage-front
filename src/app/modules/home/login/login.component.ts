import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  submitted = false;
  
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    //call login 
    this.loginService.loginByUsernamePassword(this.loginForm.value).subscribe((res) => {      
      sessionStorage.setItem('cust_role', this.getRole(res.roleId));{}
      sessionStorage.setItem('userName', res.custUsername );
      sessionStorage.setItem('userCust', res.custFirstName +" "+ res.custLastName);
      
    },
    (error) => {
      Swal.fire(
        'Login Fail!',
        'Username or Password Incorrect!',
        'question'
      )
    });
  }

  getRole(roleId: any) {
    let role = ''; 
    switch(roleId) {
      case '1': 
      case 1: 
        role = 'ADMIN';
        this.router.navigate(['admin/home']).then(() => {
          window.location.reload()
        });
        break;
      case '2':
      case 2:
        role = 'CUSTOMER'; 
        this.router.navigate(['customer/home']).then(() => {
          window.location.reload()
        });
        break;
      default:
        Swal.fire(
          'Login Fail!',
          'Role is Not Mapping in System!'          
        )
        break;     
    }
    alert(role)
    return role;
  }

  get f() { return this.loginForm.controls; }

}
