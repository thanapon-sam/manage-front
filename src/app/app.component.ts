import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = undefined;
  // isLogin: Boolean = false;
  lists: any;

  public userCust: any;
  public userStudent: any;
  //  public userfirstName: any ;
  public userId: any;

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
    sessionStorage.removeItem('user_role');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userCust');
    //  sessionStorage.removeItem('userfirstName');
    sessionStorage.removeItem('userStudent');
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    });
  }

  initRolePermission() {
    const user_role = sessionStorage.getItem('user_role');
    const role: string = (user_role != null && user_role != undefined) ? user_role : '';
    // this.isLogin = role ? true : false;
    this.permissionsService.addPermission(role);
    this.userCust = sessionStorage.getItem('userCust');
    this.userStudent = sessionStorage.getItem('userStudent');
    // this.userfirstName = sessionStorage.getItem('userfirstName');
    this.userId = sessionStorage.getItem('userId');
  }

}
