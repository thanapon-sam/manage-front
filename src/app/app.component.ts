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
  isLogin: Boolean = false;
  lists: any;

  public userName: any;
  public userCust: any;

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
    sessionStorage.removeItem('cust_role');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userCust');
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    });
  }

  initRolePermission() {
    const cust_role = sessionStorage.getItem('cust_role');
    const role: string = (cust_role != null && cust_role != undefined) ? cust_role : '';
    this.isLogin = role ? true : false;
    this.permissionsService.addPermission(role);
    this.userName = sessionStorage.getItem('userName');
    this.userCust = sessionStorage.getItem('userCust');
  }

  // setIdle() {
  //   const cust_role = sessionStorage.getItem('cust_role');
  //   if (cust_role) {
  //     console.log('start')
  //     // sets an idle timeout of 5 seconds, for testing purposes.
  //     this.idle.setIdle(20);
  //     // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
  //     this.idle.setTimeout(20);
  //     // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
  //     this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

  //     this.idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
  //     this.idle.onTimeout.subscribe(() => {
  //       this.idleState = 'Timed out!';
  //       this.timedOut = true;
  //     });
  //     this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
  //     this.idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

  //     // sets the ping interval to 15 seconds
  //     this.keepalive.interval(15);
  //     this.keepalive.onPing.subscribe(() => this.lastPing = new Date());
  //     console.log('end')
  //     this.reset();
  //   }
  // }

  // reset() {
  //   this.idle.watch();
  //   this.idleState = 'Started.';
  //   this.timedOut = false;
  // }

}
