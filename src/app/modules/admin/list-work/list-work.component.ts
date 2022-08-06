import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.css']
})
export class ListWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
