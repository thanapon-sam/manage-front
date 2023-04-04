import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


 



  constructor(
    private permissionsService: NgxPermissionsService,
    // private idle: Idle,
    // private keepalive: Keepalive,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    // this.setIdle();
    this.initRolePermission();
  }

  logOut() {

  }

  initRolePermission() {
   
  }

}
