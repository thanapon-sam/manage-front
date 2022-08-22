import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  districts: any;
  provinces: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }

  submitted = false;

  customerRegisterForm = this.fb.group({
    custId: [0],
    custUsername: [''],
    custPassword: [''],
    custTitleType: [''],
    custFirstName: [''],
    custLastName: [''],
    custGender: [''],
    custBirthDate: [''],
    custTelephone: [''],
    custEmail: [''],
    custAddrass: [''],
    custStatus: ['A'],
    custRemark: [''],
    sdtId: [''],
    roleId: [2],

    // roldId: [''],
    // disId: [{ Value: '', disabled: true },],
    // province: [{ value: '', disabled: true },],
  })

  ngOnInit(): void {
    // this.customerRegisterForm.controls['disId'].disable();
    
  }

  onSubmit() {
    this.submitted = true;
    console.log('data :', this.customerRegisterForm.value)
    // stop here if form is invalid
    if (this.customerRegisterForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      })
      return;
    } else {
      this.registerService.saveCustomers(this.customerRegisterForm.value).subscribe(res => {
        console.log('Create Sser res :', res)
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: '',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['home/login']);
          }
        }) 
        return;
      });
    }
  }


  changeUserConfirmPassword(event: any) {
    // debugger
    const pass = this.customerRegisterForm.controls['custPassword'].value;
    const confirmPassword = event.target.value;
    if (pass!=confirmPassword ) {
      Swal.fire({
        icon: 'error',
        title: 'รหัสผ่านไม่ตรงกัน',
        text: 'กรุณากรอกยืนยันรหัสผ่านให้ถูกต้อง',

      })
      return;
    }
  }
  get customersf() { return this.customerRegisterForm.controls; }

  

}
