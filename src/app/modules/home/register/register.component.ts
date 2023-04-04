import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddressService } from '../../address.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  subdistricts: any;
  districts: any;
  provinces: any;
  listAddress: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private addressService: AddressService
  ) { }

  submitted = false;

  userRegisterForm = this.fb.group({
    userId: [0],
    userUsername: [''],
    userPassword: [''],
    userTitleType: [''],
    userFirstName: [''],
    userLastName: [''],
    userGender: [''],
    userBirthDate: [''],
    userTelephone: [''],
    userEmail: [''],
    userAddrass: [''],
    userStatus: ['A'],
    userRemark: [''],
    zipCode: [''],
    roleId: [2],
    
    sdtId: [{value: ''},],
    district: [{value: '', disabled: true},],
    province: [{value: '', disabled: true},]
  })

  ngOnInit(): void {

    this.addressService.getDistrictsAll().subscribe(res => { this.districts = res; });
    this.addressService.getProvincesAll().subscribe(res => { this.provinces = res; })
  }

  onSubmit() {
    this.submitted = true;
    console.log('data :', this.userRegisterForm.value)
    // stop here if form is invalid
    if (this.userRegisterForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      })
      return;
    } else {
      this.registerService.saveUser(this.userRegisterForm.value).subscribe(res => {
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

  changeUserZipCode(event: any) {
    const zipCode = event.target.value;
    console.log('zipCode' + zipCode)
    // this.userRegisterForm.controls['sdtId'].disable();

    // เรียกตำบล
    this.addressService.getsubdistrictsByZipCode1(zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
    this.addressService.getsubdistrictsByZipCode(zipCode).subscribe(
      res => {
      console.log(res)
      if (res) {
        this.userRegisterForm.patchValue(
          {
            // subdistrict: res.sdtNameTh,
            district: res.district.disNameTh,
            province: res.district.province.pvnNameTh
          }
        )
      }
    },
    error => {
      this.userRegisterForm.patchValue(
        {
          subdistrict: '',
          district: '',
          province: ''
        }
      )
    }
    );
  }

  changeUserConfirmPassword(event: any) {
    // debugger
    const pass = this.userRegisterForm.controls['userPassword'].value;
    const confirmPassword = event.target.value;
    if (pass != confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'รหัสผ่านไม่ตรงกัน',
        text: 'กรุณากรอกยืนยันรหัสผ่านให้ถูกต้อง',

      })
      return;
    }
  }

  get userf() { return this.userRegisterForm.controls; }
}
