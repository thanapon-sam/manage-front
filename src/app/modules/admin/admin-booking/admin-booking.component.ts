import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router
    ) { }

  booking: any = [];



  ngOnInit(): void {

    this.adminService.getBooking().subscribe(res => {

      console.log('res =>', res)
      if (res) {
        this.booking = res;
      }
 

    });

  }

  onEdit(item: any) {
    alert('edit =>'+ item.bookId)
  }

  onDelete(item: any) {
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
        this.adminService.deleteBooking(Number(item.bookId)).subscribe((res) => {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.ngOnInit();
        });
      }
    });
  }
  

}
