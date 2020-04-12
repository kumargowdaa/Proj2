import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-records',
  templateUrl: './user-records.component.html',
  styleUrls: ['./user-records.component.scss']
})
export class UserRecordsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
