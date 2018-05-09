import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public sessionService: SessionService, public router: Router) {
    if (this.sessionService.user) {
        this.router.navigate(['phone']);
      }
  }

  ngOnInit() {
  }

}
