import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AdminBookingService } from './admin-booking.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  searchText: any;
  listBooking: any;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];

  submitted = false;

  //
  BookingForm = this.fb.group({
    bookId: [''],
    bookPre: [''],
    bookDate: [''],
    foodId: [''],
    tableId: [''],
    custId: [''],
    // cateId: ['', Validators.required],

  });

  constructor(
    private adminBookingService: AdminBookingService,
    private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
  ) { }

  booking: any = [];



  ngOnInit(): void {

    this.getAllProduct()

  }

  getAllProduct() {
    this.adminService.getBooking().subscribe(
      (res) => {
        console.log(res)
        this.listBooking = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.BookingForm.value);
    
    this.submitted = true;
    console.log('data :', this.BookingForm.value)
    // stop here if form is invalid
    if (this.BookingForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        text: 'Something went wrong!',
      })
    }else {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสินค้าสำเร็จ',
        text: '',
      }).then((result) => {
        if (result.isConfirmed) {
          this.adminBookingService.updateBooking(this.BookingForm.value).subscribe(res => {
            console.log('Create User res : ', res)
            window.location.reload()
          }
          )
        }
      })
    }
  }

  onEdit(item: any) {
    alert('edit =>' + item.bookId)
  }

  onDelete(item: any) {
    let bookId = this.listBooking.bookId;
    console.log(bookId);
    console.log(item.bookId);


    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: 'คุณต้องการลบข้อมูลใช่หรือไม่!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteBooking(item.bookId).subscribe(
          (res) => {
            console.log(res);
            Swal.fire('เรียบร้อย!', 'คุณได้ทำการลบข้อมูลสินค้าเรียบร้อย', 'success');
            setTimeout(function () { window.location.reload(); }, 2 * 1000);
          },
          (error) => {
            console.log('delete Product error : ', error);
          });
      }
    });
  }

  refresh() {
    this.getAllProduct()
    // this.fetchData();
    window.location.reload();
  }

}
