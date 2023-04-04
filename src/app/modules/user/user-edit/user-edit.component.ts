import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddressService } from '../../address.service';
// import { AdminService } from '../../admin/admin.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private adminService: AdminService,
    private userService: UserService,
    private addressService: AddressService
  ) { }

  subdistricts: any;
  districts: any;
  provinces: any;

  submitted = false;

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    this.initUserDataById(userId);
    this.initDropdown();
  }

  editAdminForm = this.fb.group({
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
    userStatus: [''],
    userRemark: [''],
    zipCode: [''],
    roleId: [''],

    sdtId: [{ value: '' },],
    district: [{ value: '', disabled: true },],
    province: [{ value: '', disabled: true },],
    subdistrictInput: [''],
    districtInput: [''],
    provinceInput: ['']
  })

  initDropdown() {
    
    this.addressService.getDistrictsAll().subscribe(res => { this.districts = res; });
    this.addressService.getProvincesAll().subscribe(res => { this.provinces = res; })
  }

  // ดึงข้อมูลจากตาราง user
  initUserDataById(userId: any) {
    console.log(userId);

    this.userService.getUserByUserId(userId).subscribe((res) => {
      this.addressService.getsubdistrictsByZipCode1(res.zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
      console.log('!!!!!!!!!!!!res data!!!!!!!!!!!!', res)
      this.editAdminForm.patchValue({
        userId: res.userId,
        userUsername: res.userUsername,
        userPassword: res.userPassword,
        userTitleType: res.userTitleType,
        userFirstName: res.userFirstName,
        userLastName: res.userLastName,
        userGender: res.userGender,
        userBirthDate: res.userBirthDate,
        userTelephone: res.userTelephone,
        userEmail: res.userEmail,
        userAddrass: res.userAddrass,
        userStatus: res.userStatus,
        userRemark: res.userRemark,
        sdtId: res.sdtId,
        roleId: res.roleId,
        zipCode: res.zipCode,
        subdistrictInput: res.subdistrict,
        districtInput: res.district,
        provinceInput: res.province,

        names: res.userFirstName + " " + res.userLastName,
      });
      this.loadUserZipCode(res.sdtId);
    },
      (error) => {
        console.log('!!!!!!!!!!!!!!error!!!!!!!!!!', error);
      }
    );
  }

  loadUserZipCode(sdtId: any) {
    console.log('zipCode' + sdtId)
    this.editAdminForm.controls['sdtId'].enable();
    this.addressService.getsubdistrictsBySdtId(sdtId).subscribe(
      res => {
        if (res) {
          this.editAdminForm.patchValue(
            {
              sdtId: res.sdtId,
              district: res.district.disNameTh,
              province: res.district.province.pvnNameTh,

              subdistrictInput: res.sdtNameTh,
              districtInput: res.district.disNameTh,
              provinceInput: res.district.province.pvnNameTh
            }
          )
        }
      },
      error => {
        this.editAdminForm.patchValue(
          {
            subdistrict: '',
            district: '',
            province: ''
          }
        )
      }
    );
  }

  changeUserZipCode(event: any) {
    const zipCode = event.target.value;
    console.log('zipCode' + zipCode)
    this.addressService.getsubdistrictsByZipCode1(zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
    this.addressService.getsubdistrictsByZipCode(zipCode).subscribe(
      res => {
        console.log(res)
        if (res) {
          this.editAdminForm.patchValue(
            {
              // subdistrict: res.sdtNameTh,
              district: res.district.disNameTh,
              province: res.district.province.pvnNameTh
            }
          )
        }
      },
      error => {
        this.editAdminForm.patchValue(
          {
            subdistrict: '',
            district: '',
            province: ''
          }
        )
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    console.log('data :', this.editAdminForm.value)
    if (this.editAdminForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: '',
      })
    } else {
      Swal.fire({
        title: 'ยืนยันการทำรายการ',
        text: "ต้องการบันทึกข้อมูลหรือไม่ ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.updateUser(this.editAdminForm.value).subscribe(res => {
            console.log('Update User res : ', res)
          });
          Swal.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
            text: '',
            confirmButtonText: 'ปิดหน้าต่าง',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            } else if (result.isDismissed) {
              window.location.reload()

            }
          })
        }
      })
    }
  }

  onSubmitPassword() {
    this.submitted = true;
    console.log('data :', this.editAdminForm.value)
    if (this.editAdminForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: '',
      })
    } else {
      Swal.fire({
        title: 'ยืนยันการทำรายการ',
        text: "ต้องการบันทึกข้อมูลหรือไม่ ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#198754',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก'
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.updateUser(this.editAdminForm.value).subscribe(res => {
            console.log('Update User res : ', res)
          });
          Swal.fire({
            icon: 'success',
            title: 'บันทึกข้อมูลสำเร็จ',
            text: '',
            showCancelButton: true,
            confirmButtonText: 'อยู่ในระบบต่อ',
            cancelButtonText: 'ออกจากระบบ',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload()
            } else if (result.isDismissed) {
              this.router.navigate(['../home/login']);
              this.logOut();

            }
          })
        }
      })
    }
  }

  changeUserConfirmPassword(event: any) {
    // debugger
    const pass = this.editAdminForm.controls['userPassword'].value;
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

  logOut() {
    sessionStorage.removeItem('user_role');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userUser');
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    });
  }
}//end
