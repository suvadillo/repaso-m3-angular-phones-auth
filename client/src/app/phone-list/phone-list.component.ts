import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones: Array<any> = [];

  constructor(public sessionService: SessionService, public phoneService: PhoneService, public router: Router) { 
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }
    
    // this.sessionService.userEvent.subscribe( user => {
    //   if (!this.sessionService.user) {
    //     this.router.navigate(['']);
    //   }
    // })
  }

  ngOnInit() {
    this.phoneService.getList().subscribe(p => this.phones = p);
  }
}
