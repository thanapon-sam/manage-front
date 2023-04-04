import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddressService } from '../../address.service';
import { RegisterService } from '../../home/register/register.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  searchText: any;

  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];

  subdistricts: any;
  districts: any;
  provinces: any;

  listUser: any;
  userId: any;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private adminService: AdminService,
    private addressService: AddressService,
    private registerService: RegisterService
  ) { }


  registerForm = this.fb.group({
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
    roleId: [''],

    sdtId: [{ value: '' },],
    subdistrict: [{ value: '', disabled: true },],
    district: [{ value: '', disabled: true },],
    province: [{ value: '', disabled: true },],
    subdistrictInput: [''],
    districtInput: [''],
    provinceInput: ['']
  })

  listDataForm = this.fb.group({
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
    names: [''],
    roleId: [''],
    sdtId: [''],
 
    subdistrict: [{ value: '', disabled: true },],
    district: [{ value: '', disabled: true },],
    province: [{ value: '', disabled: true },],
    subdistrictInput: [''],
    districtInput: [''],
    provinceInput: ['']
  });

  ngOnInit(): void {
    this.userId = this.activatedroute.snapshot.paramMap.get("userId");

    this.adminService.getDistrictsAll().subscribe(res => { this.districts = res; });
    this.adminService.getProvincesAll().subscribe(res => { this.provinces = res; });

    this.fetchUser();
  }

  pageChanged(event: any) {
    this.page = event;
    this.fetchUser();
  }

  refresh() {
    this.fetchUser();
    window.location.reload();
  }

  fetchUser() {
    this.adminService.getAllUser().subscribe(
      (res) => {
        console.log(res)
        this.listUser = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  selectData(item: any) {

    this.addressService.getsubdistrictsByZipCode1(item.zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
    this.listDataForm.controls['userId'].setValue(item.userId);
    this.listDataForm.controls['roleId'].setValue(item.roleId);
    this.listDataForm.controls['userUsername'].setValue(item.userUsername);
    this.listDataForm.controls['userPassword'].setValue(item.userPassword);
    this.listDataForm.controls['userTitleType'].setValue(item.userTitleType);
    this.listDataForm.controls['userFirstName'].setValue(item.userFirstName);
    this.listDataForm.controls['userLastName'].setValue(item.userLastName);
    this.listDataForm.controls['userGender'].setValue(item.userGender);
    this.listDataForm.controls['userBirthDate'].setValue(item.userBirthDate);
    this.listDataForm.controls['userTelephone'].setValue(item.userTelephone);
    this.listDataForm.controls['userEmail'].setValue(item.userEmail);
    this.listDataForm.controls['userAddrass'].setValue(item.userAddrass);
    this.listDataForm.controls['userStatus'].setValue(item.userStatus);
    this.listDataForm.controls['userRemark'].setValue(item.userRemark);
    this.listDataForm.controls['sdtId'].setValue(item.sdtId);
    this.listDataForm.controls['zipCode'].setValue(item.zipCode);
    this.listDataForm.controls['names'].setValue(item.userTitleType + item.userFirstName + " " + item.userLastName);

    // this.listDataForm.controls['sdtId'].disable();
    this.addressService.getsubdistrictsBySdtId(item.sdtId).subscribe(
      res => {
        console.log(res.sdtId);
        if (res) {
          this.listDataForm.patchValue(
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
        this.listDataForm.patchValue(
          {
            subdistrict: '',
            district: '',
            province: ''
          }
        )
      }
    );
  }

  gotoAdminEdit(item: any) {
    debugger
    this.router.navigate(['admin/manage/edit/role:' + item.roleId, item.userId]);
  }

  deleteUser(item: any) {
    console.log('data :', item.userId)
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "ลบข้อมูลของ : " + item.userFirstName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ลบข้อมูล',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteUserByUserId(item.userId).subscribe(
          (res) => {
            console.log(res);
            console.log(res, item.custId)
            Swal.fire('เรียบร้อย!', 'คุณได้ทำการลบข้อมูลผู้ใช้งานเรียบร้อย', 'success');
            setTimeout(function () { window.location.reload(); }, 2 * 1000);
          },
          (error) => {
            console.log('delete User error : ', error);
          }
        );
      }
    })

  }

  loadUserZipCode(sdtId: any) {
    console.log('zipCode' + sdtId)
    this.listDataForm.controls['sdtId'].disable();
    this.addressService.getsubdistrictsBySdtId(sdtId).subscribe(
      res => {
        if (res) {
          this.listDataForm.patchValue(
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
        this.listDataForm.patchValue(
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
    this.listDataForm.controls['sdtId'].enable();
    this.addressService.getsubdistrictsByZipCode1(zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
    this.addressService.getsubdistrictsByZipCode(zipCode).subscribe(
      res => {
        console.log(res)
        if (res) {
          this.listDataForm.patchValue(
            {
              // subdistrict: res.sdtNameTh,
              district: res.district.disNameTh,
              province: res.district.province.pvnNameTh
            }
          )
        }
      },
      error => {
        this.listDataForm.patchValue(
          {
            subdistrict: '',
            district: '',
            province: ''
          }
        )
      }
    );
  }
  changeUserZipCodeByAdd(event: any) {
    const zipCode = event.target.value;
    console.log('zipCode' + zipCode)
    this.registerForm.controls['sdtId'].enable();
    this.addressService.getsubdistrictsByZipCode1(zipCode).subscribe(res => { this.subdistricts = res; console.log('data :', res) });
    this.addressService.getsubdistrictsByZipCode(zipCode).subscribe(
      res => {
        console.log(res)
        if (res) {
          this.registerForm.patchValue(
            {
              // subdistrict: res.sdtNameTh,
              district: res.district.disNameTh,
              province: res.district.province.pvnNameTh
            }
          )
        }
      },
      error => {
        this.registerForm.patchValue(
          {
            subdistrict: '',
            district: '',
            province: ''
          }
        )
      }
    );
  }

  // ต่อ API ด้วย
  onSubmit() {
    this.submitted = true;
    console.log('data :', this.listDataForm.value);
    // stop here if form is invalid
    if (this.listDataForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลผู้ใช้งานระบบ',
        text: '',
      }).then((result) => {
        if (result.isConfirmed) {
          this.adminService
            .updateUser(this.listDataForm.value)
            .subscribe((res) => {
              console.log('Create User res : ', res);
              window.location.reload();
            });
        }
      });
    }
  }

  onSubmitAddMember() {
    this.submitted = true;
    console.log('data :', this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      })
      return;
    } else {
      this.registerService.saveUser(this.registerForm.value).subscribe(res => {
        console.log('Create Sser res :', res)
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: '',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
        return;
      });
    }
  }

}//end

