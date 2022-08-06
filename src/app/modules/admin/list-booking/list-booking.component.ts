import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  listBooking: any = []

  ngOnInit(): void {

    this.adminService.getbooking().subscribe(res => {
      console.log('res =>',res)
      if (res){
        this.listBooking = res;
      }
    });
  }

  onEdit(item: any) {
    alert('edit =>'+item.bookId)
  }

  onDelete(item: any) {
    //alert('delete =>'+item.bookId)
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "คุณต้องการลบข้อมูลหรือไม่",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'ลบข้อมูลเรียบร้อยแล้ว',
          'success'
        )
      }
    });
  }

}
