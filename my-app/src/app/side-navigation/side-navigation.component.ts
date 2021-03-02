import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickEvent() {
    this.status = !this.status;
}
}
