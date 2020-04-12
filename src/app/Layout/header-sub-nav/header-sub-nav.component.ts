import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-sub-nav',
  templateUrl: './header-sub-nav.component.html',
  styleUrls: ['./header-sub-nav.component.scss']
})
export class HeaderSubNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
