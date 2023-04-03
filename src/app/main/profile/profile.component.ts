import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  isChecked: boolean = false;
  constructor() {
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }

}
